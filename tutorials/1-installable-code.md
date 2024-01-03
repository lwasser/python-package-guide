# Make your Python code installable

:::{admonition} What we previously covered
[In the previous lesson](tutorials/intro.html), you learned about what a Python package is. You also learned about the [benefits of creating a Python
package](tutorials/intro.html#why-create-a-python-package).
:::

Your next step in our packaging tutorial series is
creating a Python package that is installable both
locally and remotely from a website such as from GitHub
(or GitLab). The package that you create in this lesson
will have the bare minimum elements needed to be installable into a Python environment.

:::{todo}
1. Is it clear where to add commands? bash vs. Python console
Bash vs zsh is different
2. Does this lesson run as expected on windows and mac?
:::

:::{figure-md} code-to-python-package

<img src="../images/tutorials/code-to-python-package.png" alt="Diagram showing the basic steps to creating an installable package. There are 4 boxes with arrows pointing towards the right. The boxes read, your code, create package structure, add metadata to pyproject.toml and pip install package." width="700px">

A basic installable package needs a few things: code, a [specific package file structure](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-structure.html) and a `pyproject.toml` containing your package's name and version. Once you have these items in the correct directory structure, you can pip install your package into any environment on your computer. You will learn how to create a basic installable package in this lesson.

:::

:::{admonition} Learning Objectives
:class: tip

In this lesson you will learn:

- How to make your code installable into any Python environment both locally and from GitHub
- How to create a basic `pyproject.toml` file to declare dependencies and metadata
- How to declare a [build backend](build_backends) which will be used to [build](build-package) and install your package
- How to install your package in editable mode for interactive development

To complete this lesson you will need a local Python (development)
environment. You are welcome to use any environment manager that you choose.

* [If you need guidance creating a Python environment, review this lesson](extras/1-create-environment.md) which walks you through creating an environment using both `venv` and `conda`.
* If you aren't sure which environment manager to use and
you are a scientist, we suggest that you use `conda`, particularly if you are working with any sort of spatial data.

In the upcoming lessons you will learn how to

* Add a README file to your package to support community use
* Add project metadata to your package to support PyPI publication
* Publish your package to PyPI
:::


:::{figure-md} packages-environment

<img src="../images/tutorials/environment-package-install.png" alt="This diagram has two smaller boxes with arrows pointing to the right to a python environment. The small boxes read your-package and pip install package. The environment box on the right reads - your python environment. It them lists your-package along with a few other core packages such as matplotlib, numpy, pandas, xarray and geopandas." width="700px">

Making your code installable is the first step towards
creating a publishable Python package. Once your code is
installable, it is a Python package and can be added to
any Python environment on your computer and imported in
the same way that you might import a package such as
Pandas or GeoPandas. If your code is on GitHub or GitLab
you can also install it directly from there.
:::


## About the Python package directory structure

To make your Python code installable you need to create a specific directory structure with the following elements:

- A `pyproject.toml` file.
- A specific directory structure.
- Some code.
- An `__init__.py` file in your code directory.

The directory structure you’ll create below looks like this:

```bash
pyospackage/  # Your project directory
     └─ pyproject.toml
     └─ src/  # The source (src) directory ensures your tests always run on the installed version of your code
             └── pyospackage/  # Package directory where code lives
              	      ├── __init__.py
                      ├── add_numbers.py
                      └── # Add any other .py modules that you want here
```

### About the basic package directory structure

Notice a few things about the above layout:

1. Your package code lives within a `src/packagename` directory. We suggest that you use `src` directory as it ensures that you are running tests on the installed version of your code. However, you are welcome to instead use a [flat layout](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-structure.html#about-the-flat-python-package-layout) which does not have a src/ directory at the root. [Learn more here.](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-structure.html#the-src-layout-and-testing)
1. Within the `src` directory you have a package directory called `pyospackage`. Use the name of your package for that directory name.
1. In your package directory, you have an `__init__.py` file and all of your Python modules. You will learn more about the __init__.py file below.
1. The `pyproject.toml` file lives at the root directory of your package.
1. The name of the root directory for the package is **pyospackage** which is the name of the package. This is not a requirement but you will often see that the GitHub / GitLab repo and the root directory name are the same as the package name.

### What is an __init__.py file?

When a directory contains an `__init__.py` file, it can be imported directly into Python.

For example, following the file structure example above which has an `__init__.py` file within it, you can run:

```python
import pyospackage
```

The `__init__.py` file  tells Python that a directory should be treated
as a Python package.


:::{admonition} The **__init__**.py file
:class: tip

The __init__.py file does not need to contain any code, it can be
empty. Since Python 3.3 came out, you can install a package without an
`__init__.py` file. However, we suggest that you include empty __init__.py files in your
package structure as it allows you to customize your package’s user
experience.
:::


### What is a pyproject.toml file?

The **pyproject.toml** file is:

- Where you define your project’s metadata (including its name, authors, license, etc)
- Where you define dependencies (the packages that it depends on)
- Used to specify and configure what build back end you want to use to [build your package](../package-structure-code/python-package-distribution-files-sdist-wheel).

After the `__init__.py` and `pyproject.toml` files have been added,
your package can be built and distributed as an installable Python
package using tools such as pip. Note that the `pyproject.toml` file
needs to have a few basic items defined for the package to be
installable including:

- The `build-backend` that you want to use,
- The project `name` and `version`.

:::{admonition} Why the pyproject.toml file is important
:class: tip

The `pyproject.toml` file replaces some of the functionality of both the setup.py file and setup.cfg files.
If you try to pip install a package with no `pyproject.toml` you will get the following error:

```bash
GitHub/pyospackage/testme
➜ pip install .
ERROR: Directory '.' is not installable.
Neither 'setup.py' nor 'pyproject.toml' found.
```

:::

## Time to create your Python package!

Now that you understand the basics of the Python package directory structure, it's time to create a Python package! Below you will create a directory structure similar to the structure described above.

If you don’t wish to create each of the files and directories below, you can always [fork and clone and customize the pyOpenSci example package.](https://github.com/pyOpenSci/pyosPackage)

## Step 1: Set Up the Package Directory Structure

Below you create the basic directory structure required
for your Python package. Note that there are instructions for creating the files and directories using shell. However you can also create files and directories in your preferred file directory tool (e.g. Finder on MAC or File Explorer on Windows) if you wish.

Create a new project directory for your package. Choose a
name for your package, preferably in lowercase and
without spaces (e.g., "pyospackage").

Inside the project directory:

- Create a directory called `src`
- Within the `src` directory, create a directory that is named after your package. This subdirectory will contain your package’s code.
- It is ok if the project directory for your package and the directory in `src` have the same name

```bash
# Create a project directory in shell and a src directory within
mkdir -R pyospackage/src/pyospackage
# Change directory into pyospackage project dir
cd pyospackage
# View the current file structure
ls
```

Next create two files:

- Inside the package directory, create a new file named `__init__.py` . This file ensures Python sees this directory as a package. You will use this file to customize how parts of your package are imported and to declare your package’s version in a future lesson.
- At the root of your project, create a file called `pyproject.toml`

```bash
# Create a pyproject.toml file in your project directory
touch pyproject.toml
# Create an empty init file within your src/pyospackage directory
touch src/pyospackage/__init__.py
```

Your final project directory structure should look like this:

```bash
pyospackage/  # This is your project directory
     └─ pyproject.toml
     └─ src/ # This is your package directory where your code lives
             └── pyospackage/
              	     ├── __init__.py
```

## Step 2: Add code to your package

Within the `pyospackage` subdirectory, add 1 or more Python modules
(.py files) containing the code that you want your package to access and run.
If you don't have code already and are just learning how to
create a Python
package, then create an empty `add_numbers.py` file.

:::{admonition} Python modules and the __init__.py file
:class: tip

When you see the word module, we are referring to a `.py` file containing Python
code.

The `__init__.py`  allows Python to recognize that a directory contains at least one
module that may be imported and used in your code. A package can have multiple
modules.

[Learn more about Python packages and modules in the Python documentation.](https://docs.python.org/3/tutorial/modules.html#packages )

:::

```
pyospackage/
     └─ pyproject.toml
     └─ src/
             └── pyospackage/
              	    ├── __init__.py
                    ├── add_numbers.py

```

## Step 3. Add code to your `add_numbers` module

If you are following along and making a Python package from scratch then you can add the code below to your `add_numbers.py` module. The function below adds two integers together and returns the result. Notice that the code below has a few features that we will review in future tutorials:

1. It has a [numpy-style docstring ](https://www.pyopensci.org/python-package-guide/documentation/write-user-documentation/document-your-code-api-docstrings.html#three-python-docstring-formats-and-why-we-like-numpy-style)
2. It uses [typing](https://www.pyopensci.org/python-package-guide/documentation/write-user-documentation/document-your-code-api-docstrings.html#adding-type-hints-to-your-docstrings)

If you aren’t familiar with docstrings or typing yet, that is ok. We will get
to it later in our tutorial series. Or, you can review the pyOpenSci [packaging guide](https://www.pyopensci.org/python-package-guide/documentation/write-user-documentation/document-your-code-api-docstrings.html)
for an overview.

```python
def add_num(a: int, b: int) -> int:
    """
    Add two numbers.

    Parameters
    ----------
    a : int
        The first number to be added.
    b : int
        The second number to be added.

    Returns
    -------
    int
        The sum of the two input numbers (a + b).

    Examples
    --------
    >>> add_num(3, 5)
    8
    >>> add_num(-2, 7)
    5
    """
    return a + b
```

## Step 4. Add metadata to your `pyproject.toml` file

Next, you will add some metadata (information) to your `pyproject.toml` file. You are
are welcome to copy the file we have in our [example pyospackage GitHub repository](https://github.com/pyOpenSci/pyosPackage).

:::{admonition} Brief overview of the TOML file
:class: tip

The TOML format consists of tables and variables. Tables are sections of information denoted by square brackets:

`[this-is-a-table]`.

Tables can contain variables within them defined by an variable name and
an `=` sign. For
instance, a `build-system` table most often holds 2 variables:

1. `requires = `, which tells a build tool what tools it needs to install prior to building your package. In this case
   [hatchling](https://pypi.org/project/hatchling/)
2. `build-backend = `, which is used to define the specific build-backend name, (in this example we are using `hatchling.build`).

TOML organizes data structures, defining relationships within a configuration
file. You will learn more about the `pyproject.toml` format in the
[next lesson when you add additional metadata / information to this file.](5-pyproject-toml.md)

```toml
# An example of the build-system table which contains two variables - requires and build-backend
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"
```

[Learn more about the pyproject.toml format here.](../package-structure-code/pyproject-toml-python-package-metadata)
:::

- Open up your `pyproject.toml` file in your favorite text editor.
- Add the metadata below to your `pyproject.toml`

```toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "pyospackage_gh_user_name"  # rename this if you plan to publish to test PyPI
# Here you add the package version manually.
# You will learn how to setup dynamic versioning in a followup tutorial.
version="1.1"

```

Note that above you manually add your package's version number to the
`pyproject.toml` file. You will learn how to automate defining a package
version using git tags in the version and release your package lesson. <ADD LINK>

:::{admonition} The bare minimum needed in a pyproject.toml file
:class: tip

The core basic information that you need in a `pyproject.toml` file in order to publish on PyPI is your **package's name**  and the **version**. However, we suggest that you flesh out your metadata early on in the `pyproject.toml` file.

Once you have your project metadata in the pyproject.toml file, you will
rarely update it. In the next lesson you’ll add more metadata and structure to this file.
:::

## Step 5. Install your package locally

At this point you should have:

1. A project directory structure with a `pyproject.toml` file at the root
2. A package directory containing an empty `__init__.py` file and
3. At least one Python module (e.g. `add_numbers.py`)

You are now ready to install (and build) your Python package!

Let’s try it out.

- First open bash and `cd` into your package directory
- Activate the Python environment that you wish to use. If you need help with working with virtual environments [check out this lesson](extras/1-create-environment.md).
- Finally run `python -m pip install -e .`

```bash
# Activate your environment using conda or venv
# Below we use conda but you can do the same thing with venv!
> conda activate pyosdev
(pyosdev)
>> conda info
    active environment : pyosdev
    active env location : /Users/your-path/mambaforge/envs/pyosdev
# Install the package
>> python -m pip install -e .

Obtaining file:///Users/leahawasser/Documents/GitHub/pyos/pyosPackage
  Installing build dependencies ... done
  Checking if build backend supports build_editable ... done
  Getting requirements to build editable ... done

# Check to see if the package is installed
> conda list
# use pip list instead of conda list here if you are working in an venv environment rather than a conda envt
```

:::{admonition}  What does `pip install -e .` do?
:class: tip

Let's break down `pip install -e .`

`pip install -e .` installs your package into the current active
Python environment in **editable mode** (`-e`). Installing your package in
editable mode, allows you to work on your code and then test the updates
interactively in your favorite Python interface. One important caveat of editable mode is that every time you update your code, you may need to restart your Python kernel.

If you wish to install the package regularly (not in editable
mode) you can use:

- `python -m pip install . `

**Using `python -m` when calling `pip`**

Above, you use`python -m` to call the version of pip installed into your
current active environment. `python -m` is important to ensure that you are
calling the version of pip installed in your current environment.
:::

### Look for pyospackage in your environment

Once you have installed your package, you can view it in your current
environment. If you are using `venv` or `conda`, `pip` list will allow you
to see your current package installations.

Note that because pyospackage is installed in editable mode (`-e`) pip will show you the directory path to your project's code

```bash
$ pip list

➜ pip list
Package                       Version        Editable project location
----------------------------- -------------- --------------------------------------------------------------
...
arrow                         1.2.3
...
...
mamba                         1.1.0
markdown-it-py                2.2.0
MarkupSafe                    2.1.2
matplotlib                    3.7.1
msgpack                       1.0.5
mypy                          1.4.1
nox                           2021.10.1
numpy                         1.24.2
packaging                     23.0
pandas                        1.5.3
pyosPackage                   0.1.0          /Users/yourusername/path/here/pyosPackage
...
...
...
```

## 6. Test out your new package

After installing your package, type “python” at the command prompt to start
a Python session in your active Python environment.

You can now import your package and access the `add_num` function.

```bash
➜ python
Python 3.11.4 | packaged by conda-forge | (main, Jun 10 2023, 18:08:41) [Clang 15.0.7 ] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import pyospackage
>>> pyospackage.add_num(1, 2)
3
```

## Congratulations! You created your first Python package

You did it! You have now created a Python package that you can install into any Python environment. While there is still more to do if you want to publish your package, you have completed the first major step.

In the upcoming lessons you will:

* Add a [README file](2-add-readme.md) and [LICENSE ](4-add-license-file.md) to your package
* [Add more metadata to your `pyproject.toml`](5-pyproject-toml.md) file to support PyPI publication.
* [Learn how to build your your package distribution](6-publish-pypi.md) files (**sdist** and **wheel**) and publish to **test PyPI**.
* Finally you will learn how to publish to **conda-forge** from **PyPI**.

If you have a package that is ready for the mainstream user then
you can also publish your package on PyPI.


:::{admonition} Installing packages from GitHub

If you wish to share your code without publishing to PyPI you can
always install packages directly from GitHub using the syntax:

```bash
pip install git+https://github.com/user/repo.git@branch_or_tag
```
:::
