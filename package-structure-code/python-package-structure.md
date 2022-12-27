# Python Package Structure

```{important}
Things to add:
* using pyproject toml  and peps that support it
* moving way from setup py
* setup.cfg 
``` 
## Package publication 

pyOpenSci requires that your package can be installed from a public community 
repository such as `PyPI` or a `conda` channel such as `bioconda` or `conda-forge`.

## What should the structure of your package look like?

Below you can see the recommended structure of a (scientific) Python package. 

```
myPackage/
├── CHANGELOG.md             ┐
├── CODE_OF_CONDUCT.md       │
├── CONTRIBUTING.md          │
├── docs/                    │ Package documentation
│   └── ...                  │
├── LICENSE                  │
├── README.md                ┘
├── pyproject.toml           ┐ 
|   myPackage/               │ Package source code, metadata,
│     ├── __init__.py        │ and build instructions 
│     ├── moduleA.py         │
│     └── moduleB.py         ┘
      tests/                 ┐
        └── test-file1.py    |
        └── ....             ┘ Package tests
```
pyOpenSci suggests this package structure as it aligns with the structures of 
core scientific Python ecosystem including:

* [numpy](https://github.com/numpy/numpy)
* [scipy](https://github.com/scipy/scipy)
* [pandas](https://github.com/pandas-dev/pandas)
* [xarray](https://github.com/pydata/xarray) 
* [Jupyter-core](https://github.com/jupyter/jupyter_core)
* [Jupyter notebook](https://github.com/jupyter/notebook)
* [scikit-learn](https://github.com/scikit-learn/scikit-learn)


## Core file requirements for a Python package

In the above example you can see both the core documentation files 
that pyOpenSci requires all live in the root of your project 
directory. These files include: 

<!-- TODO: add link when documentation section is merged -->
* A documentation website 
* CHANGELOG.md 
* CODE_OF_CONDUCT.md 
* CONTRIBUTING.md 
* LICENSE 
* README.md 

And the tests/ directory containing your test suite. 

```{button-link} https://www.pyopensci.org/python-package guide/documentation
:color: primary
:class: sd-rounded-pill float-left
Click here to read about our packaging documentation requirements.
```

## Scientific Python community standards 


The discussion below focuses on the recommended structure for Scientific 
Python packages. 


```{note}

### Src vs. flat layouts for Python packaging
While you will see other structures, [such as the `src/` 
layout](https://packaging.python.org/en/latest/discussions/src-layout-vs-flat-layout/) recommended by the [Python packaging authority](https://py-pkgs.org/04-package-structure) and others, all scientific
Python packages have used a flat layout. This structure has been 
prevalent for almost a decade. 

Because a core goal shared by both pyOpenSci and the Scientific Python 
project, is to see increased standardization in Python packaging, we 
are advocating for a structure that is used by existing packages in the 
ecosystem. 

Many of our core scientific Python packages wrap around other compiled languages, such as C++. They thus have source code that requires compilation. It would be challenging and potentially time-consuming for all of those packages to modify their current 
structure. And further it would not provide them with any core benefit.

pyOpenSci however will never require a specific package structure for its 
peer review process. The overview on this page presents recommendations. 
```


### The flat layout for Python packages

The flat structure has been historically, the most common package approach used in the scientific packaging 
ecosystem. It is a structure used by the entire scientific Python ecosystem. 

The flat layout's primary characteristics are: 

* The source code for your package lives in a directory with your package's name in the root of your directory 
* Often the `tests/` directory also lives within that same `package-name` directory.

#### Benefits of using this structure 

* This structure has historically been the most common so you'd be following a convention that many packages use already.  
* This structure is simpler to setup compared to the `src/` approach listed below
* You can directly install the package directly from the root directory 
* Tests are shipped with the packages. This allows developers to invoke tests on various machines to troubleshoot installations if needed.


```bash
$ cd package-name
$ pip install -e .`
```

## setup.py, setup.cfg and pyproject.toml file

In recent years, Python package standards have begun to move away from 
including both package metadata and python code needed to setup a package installation in the same setup.py file. The current recommendations are 
to [include all project based metadata, and to specify the build system that you want to use in a `pyproject.toml` file.](https://pip.pypa.io/en/stable/reference/build-system/pyproject-toml/)


Below is an example build configuration for a Python project. This setup 

requires:
 * **setuptools** to create the package structure, 
 * **wheel** which is used by `setuptools` to create the whl (wheel) file. 
 * It also uses `setuptools_scm` to handle version updates

The build back end is 

setuptools.build: <How does using flit change the build?>

 
  into setuptools  
```
[build-system]
requires = ["setuptools>=45", "wheel", "setuptools_scm[toml]>=6.2"]
build-backend = "setuptools.build_meta"
```


If you use `build` to create your package's wheel and tarball, you can now 
store dependencies in either the setup.cfg file or the pyproject.toml file. 


```{note}
It is important to note, that in some packages requiring complete configuration, a setup.py file might still be required. 
```

[PEP518 describes the move away from setup.py to the pyproject.toml file.](https://peps.python.org/pep-0518/).


```{tip}
PEPs stand for Python Enhancement Protocols. They provide guidelines for standardizing 
Python code and packaging. 
```

Example of setup.cfg - verde: https://github.com/fatiando/verde/blob/main/setup.cfg
Build system for this - https://github.com/fatiando/verde/blob/main/pyproject.toml

<!-- 
````{note}
### The src layout for Python packages

The src layout is another option. You can look at web specific packages like
Django to see that type of structure. This layout is advocated for by the  
[PyPA](https://packaging.python.org/en/latest/tutorials/packaging-projects/)
The key characteristic of this layout is that your package 
uses a `src/package-name` directory structure. Tests are 
often located in a directory outside of the package. 

*Please note that while the PyPA (Python packaging authority) is a [group that is developing powerful tools for Python packaging they are not officially an "authority" on packaging in the Python community.](https://www.pypa.io/en/latest/members/#pypa-members-and-how-to-join)*

#### Pros of the src/ layout
* The benefits of this approach is that it ensures that tests are always running on the installed version of your package rather than on the flat files
* Additional files, such as tests, aren't delivered to the user installing the package which means slightly smaller package  size.   

#### Cons of the src/ layout
* Can be slightly trickier to configure. examples:
    * Tools like build won't automatically find the package directory if it's within `src/package-name` without being configured. 
* Setting up continuous integration is more complex as you will have to account for the `src/` directory when installing the package 
* While this layout is common in the broader Python ecosystem, it does not necessarily support the needs of the scientific Python ecosystem which often has tools that wrap around other compiled languages such as C++

An example of the src layout structure can be seen below:
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
│   └── myPackage               │ Package source code, metadata,
│       ├── __init__.py        │ and build instructions 
│       ├── moduleA.py         │
│       └── moduleB.py         ┘
└── tests                      ┐
    └── ...                    ┘ Package tests
``` 

````
 -->

