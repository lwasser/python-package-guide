# Python Package Structure for Scientific Python Projects

There are two different layouts that you will commonly see
within the Python packaging ecosystem:
[src and flat layouts.](https://packaging.python.org/en/latest/discussions/src-layout-vs-flat-layout/)
Both layouts have advantages for different groups of maintainers.

On this page you will learn more about both layouts.
Here we:

1. Suggest the **src/package-name** layout structure for new packages. This layout prevents some commonly found issues with the flat layout (discussed below)
2. Introduce the flat layout as it is used in the scientific ecosystem. Currently this layout is the most common. As such it's good to be familiar with it in case you contribute to a package using a flat layout in the future! wOr you maintain one now!

```{important}
pyOpenSci however will never require a specific package structure for its
peer review process. We understand that it would be tremendous effort for existing
maintainers to move to a new layout.

The overview on this page presents recommendations that may be particularly useful
for those getting started with Python packaging.
```

## The src/ layout for Python packages

The **src/package-name** layout is included in the [PyPA packaging guide](https://packaging.python.org/en/latest/tutorials/packaging-projects/). It is also the approach that we suggest
for new maintainers. We suggest the src/package-name layout because it makes it
easier for you to create a package build workflow that tests your package
as it will be installed on a users computer.

The key characteristic of this layout is that your package
uses a `src/package-name` directory structure. With this layout it is also common
to include your `tests/` directory outside of the package
directory. However, you may see some packages
that includes tests within the `src/package-name` directory.

```{admonition} Example scientific packages that use **src/package-name** layout

* [Sourmash](https://github.com/sourmash-bio/sourmash)
* [openscm](https://github.com/openscm/openscm-runner)
* [awkward](https://github.com/scikit-hep/awkward)
```

#### Pros of the src/ layout

The benefits of the  **src/package-name** layout approach include:

* It ensures that tests always run on the installed version of your
package rather than on the flat files imported directly from your package. If you run your tests on your flat files, you may be missing issues that users may encounter with your package when it's installed.
* If `tests/` are outside of the **src/package-name** directory, they aren't by default
delivered to a user
installing your package. However, you can chose to add them to the package archive. When tests are not included in the package archive your package size will be slightly smaller.
* The `src/package-name` layout is semantically more clear. Code is always found in the
`src/package-name` directory, `tests/` and `docs/`are in the root directory.

```{tip}
* [Read more about reasons to use the **src/package-name** layout](https://hynek.me/articles/testing-packaging/)
```

An example of the **src/package-name** layout structure can be seen below:

```
myPackage
├── CHANGELOG.md               ┐
├── CODE_OF_CONDUCT.md         │
├── CONTRIBUTING.md            │
├── docs                       │ Package documentation
│   └── index.md
│   └── ...                    │
├── LICENSE                    │
├── README.md                  ┘
├── pyproject.toml             ┐
├── src                        │
│   └── myPackage              │ Package source code, metadata,
│       ├── __init__.py        │ and build instructions
│       ├── moduleA.py         │
│       └── moduleB.py         ┘
└── tests                      ┐
   └── ...                     ┘ Package tests
```

## Core file requirements for a Python package

In the above example, notice that all of the core documentation files that
pyOpenSci requires live in the root of your project directory. These files
include:

* CHANGELOG.md
* CODE_OF_CONDUCT.md
* CONTRIBUTING.md
* LICENSE.txt
* README.md

Also note that there is a **docs/** directory at the root where your user-facing
documentation website lives.

```{button-link} https://www.pyopensci.org/python-package-guide/documentation
:color: primary
:class: sd-rounded-pill

Click here to read about our packaging documentation requirements.
```


```{important}
If your package tests require data, we suggest that you do NOT include that
data within your package structure. We will discuss this in more detail in a
tutorial. Include data in your package structure increases the size of your
distribution files. This places a maintenance toll on repositories like PyPI and
anaconda cloud that have to deal with thousands of package uploads.
```

## About the flat Python package layout

Currently most scientific packages use the **flat-layout** given:

* It's the most commonly found layout with the scientific Python ecosystem and
people tend to look to other packages / maintainers that they respect for examples
of how to build Python packages.
* Many Python tools depend upon tools in other language and / or complex builds
with compilation steps. Many developers thus appreciate / are used to features
of the flat layout.

While we present this layout here in our guide, we suggest that those just
getting started with python packaging start with the src/package-name layout
discussed above. Numerous packages in the ecosystem [have had to move to a
src/ layout](https://github.com/scikit-build/cmake-python-distributions/pull/145)


```{admonition} Why most scientific Python packages do not use source
:class: tip

In most cases the advantages of using the **src/package-name** layout for
larger scientific packages that already use flat approach are not worth it.
Moving from a flat layout to a **src/package-name** layout would come at a significant cost to
maintainers.

However, the advantages of using the  **src/package-name** layout for a beginner are significant.
As such, we recommend that if you are getting started with creating a package,
that you consider using a  **src/package-name** layout.
```

## What does the flat layout structure look like?


```{admonition} Core scientific Python packages that use the flat layout
:class: tip

* [numpy](https://github.com/numpy/numpy)
* [scipy](https://github.com/scipy/scipy)
* [pandas](https://github.com/pandas-dev/pandas)
* [xarray](https://github.com/pydata/xarray)
* [Jupyter-core](https://github.com/jupyter/jupyter_core)
* [Jupyter notebook](https://github.com/jupyter/notebook)
* [scikit-learn](https://github.com/scikit-learn/scikit-learn)

It would be a significant maintenance cost and burden to move all of these
packages to a different layout. The potential benefits of the source layout
for these tools is not worth the maintenance investment.
```

The flat layout's primary characteristics are:

* The source code for your package lives in a directory with your package's
name in the root of your directory
* Often the `tests/` directory also lives within that same `package-name` directory.

Below you can see the recommended structure of a scientific Python package
using the flat layout.

```bash
myPackage/
├── CHANGELOG.md             ┐
├── CODE_OF_CONDUCT.md       │
├── CONTRIBUTING.md          │
├── docs/                    │ Package documentation
│   └── ...                  │
├── LICENSE                  │
├── README.md                ┘
├── pyproject.toml           ] Package metadata and build configuration
|   myPackage/               ┐
│     ├── __init__.py        │ Package source code
│     ├── moduleA.py         │
│     └── moduleB.py         ┘
      tests/                 ┐
        └── test-file1.py    | Package tests
        └── ....             ┘
```


```{note}
If you look at
[the `matplotlib` repository on GitHub](https://github.com/matplotlib/matplotlib),
you will notice it too has a  **src/package-name** directory, however
that structure is there because `matplotlib` has uncompiled source code in that
directory. it is not adhering to the **src/package-name** layout explicitly.
```

### Benefits of using the flat layout in your Python package

There are some benefits to the scientific community in using the flat layout.

* This structure has historically been used across the ecosystem and packages
using it are unlikely to change.
* You can directly import the package directly from the root directory. For 
some this is engrained in their respective workflows. However for a beginner 
the danger of doing this is that you are not developing and testing against the 
installed version of your package. Rather, you are working directly with the 
flat files.
