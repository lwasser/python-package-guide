# Make your Python package PyPI ready - pyproject.toml

In [the installable code lesson](2-installable-code), you learned how to add the bare minimum information to a `pyproject.toml` file to make it installable. You then learned how to [publish a bare minimum version of your package to PyPI](publish-pypi.md).

Following that you learned how to add a:
* [README.md](add-readme)
* [LICENSE](add-license-coc) and
* [CODE_OF_CONDUCT](add-coc)

to the root of your project directory.

To enhance the visibility of your package on PyPI and provide more information
about its compatibility with Python versions, project development status, and
project maintainers, you should add additional metadata to your `pyproject.toml`
file. This
lesson will guide you through the process.


:::{admonition} Learning Objectives
:class: tip

In this lesson you will learn:

1. More about the `pyproject.toml` file and how it's used to store different types of metadata about your package
1. How to declare information (metadata) about your project to help users find and understand it on PyPI.

If you wish to learn more about the `pyproject.toml` format, [check out this page. ](../package-structure-code/pyproject-toml-python-package-metadata.md)
:::

:::{dropdown} Click for lesson takeaways
:color: secondary
:icon: unlock

When creating your pyproject.toml file, consider the following:

1. There are only two required metadata tables that you need to install and publish your Python package:
    * **[build-system]**
    * **[project]**.
2. The **[project]** table stores your package's metadata. Within the **[project]** table, There are only two _required_ fields:
    * **name=**
    * **version=**
3. You should add more metadata to the `[project]` table as it will make it easier for users to find your project on PyPI. And it will also make it easier for installers to understand how to install your package.
3. When you are adding classifiers to the **[project]** table, only use valid values from [PyPI’s classifier page](https://PyPI.org/classifiers/). An invalid value here will raise an error when you build and publish your package on PyPI.
4. There is no specific order for tables in the `pyproject.toml` file. However, fields need to be placed within the correct tables. For example `requires =` always need to be in the **[build-system]** table.
5. We suggest that you include your **[build-system]** table at the top of your `pyproject.toml` file.
:::


## What is a pyproject.toml file?

The `pyproject.toml` file is a human and machine-readable file that serves as the primary configuration file for your Python package.

The TOML format can be compared to other structured formats such as`.json`. However, the TOML format was designed to be easier to read for humans.

:::{tip}
[Building your package](build-package) is the step that created the distribution files that are required for you to publish to PyPI.
:::


### About the .toml format

The **pyproject.toml** file is written in [TOML (Tom's Obvious, Minimal Language) format](https://toml.io/en/). TOML is an easy-to-read structure that is based on key/value pairs. Each section in the **pyproject.toml** file contains a `[table identifier]`.

Below you can see the `[build-system]` table. Within
that table there are two required key/value pairs.

`requires =`  is the key and the value is `["hatchling"]` within the `[build-system]` array specified by square brackets [].

```toml
[build-system] # <- this is a table
requires = ["hatchling"]
# The build backend defines the tool that should be used to build your package distribution files.
build-backend = "hatchling.build"
```


### What is the pyproject.toml used for?

The pyproject.toml file tells your build tool:

- What build backend to use to build your package (we are using `hatchling` in this tutorial but there are [many others to chose from](build-backend-options)).
- How and where to retrieve your package's version:
    - **statically** where you declare the version `version = "0.1.0"` or
    - **dynamically** where the tool looks to the most recent tag in your history to determine the current version.
- What dependencies your package needs
- What versions of Python your package supports (important for your users).

The `pyproject.toml` file also makes it easy for anyone browsing your GitHub
repository to quickly understand your package's structure such as:

- How your package is built,
- What Python versions and operating systems it supports
- What it does,
- Who maintains it

Finally, it is also often used to configure tools such as static type checkers (e.g. mypy), linters (e.g. black, ruff), and other tools.

:::{tip}
Check out the [PyPA documentation](https://packaging.python.org/en/latest/tutorials/packaging-projects/#creating-pyproject-toml) if you are interested in setting build configurations for other tools.

Note that some build tools may deviate in how they store project metadata. As such you may want to refer to their documentation if you decide to use a tool other than Hatch and hatchling. We have selected hatchling and hatch as our tool of choice for this tutorial as it adheres to PyPA rules and guidelines.

:::

### What is the metadata for?

The pyproject.toml file is the file that your build tool uses to populate
a `METADATA` that is included in your Python distribution files that get published to PyPI.

This `METADATA` file is then used by PyPI to populate your package's PyPI landing page and help users filter through the tens of thousands of packages published there.

```{figure} ../images/python-build-package/pypi-metadata-classifiers.png
:scale: 50 %
:align: center
:alt: Image showing the left side bar of PyPI for the package xclim. The section at the top says Classifier. Below there is a list of items including Development status, intended audience, License, natural language, operating system, programming language and topic. Below each of those sections are various classifier options." width="300px">

When you add the classifier section to your pyproject.toml
and your package is built, the build tool organizes the metadata into a format that PyPI can understand and
represent on your PyPI landing page. These classifiers also allow users to sort through packages by version of python they support, categories and more.
```

:::{tip} A more in-depth overview of pyproject.toml files

[Our guidebook page has a more in depth overview of this file](../package-structure-code/pyproject-toml-python-package-metadata/)
:::


## Time to update your pyproject.toml file

In the last lesson, you created a bare-bones pyproject.toml
file that contained the core elements needed to build your
package:

1. A `[build-system]` table where you defined your project's backend build tool (`hatchling`)
2. A `[project]` table where you defined your project's version and name.

The `pyproject.toml` file that you created, looked like this:

```toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "pyospackage"
version = "0.1.0"
```

Your next step is to add additional recommended metadata fields that will both
help users find your package on PyPI and also better describe the scope of your package. Once you add this metadata, you don't have to do it again. These metadata fields will only be updated periodically when you do something such as:

- drop a package dependency
- modify what Python versions your package supports.

:::{admonition} More on hatchling
:class: tip

The documentation for the hatchling back-end is [here](https://hatch.pypa.io/latest/config/metadata/)
:::

We'll walk through completing your `pyproject.toml` file, extending the `project` table and adding a `project.urls` table:

- `description`: what does your package do in one sentence?
- `authors` and `maintainers`: who has contributed to your package?
- `classifiers`: what categories does your package belong in?
- `dependencies` and `requires-python`: what does your package need to run?
- `readme` and `license`: what files within your repo also have metadata?
- `project.urls`: where can your package be found?

### `description`, `authors`, `maintainers`

Let's add the following to your table:

- A **description** of your package. This should be a single line and should briefly describe the goal of your package using non technical terms if as all possible!
- package **authors**, these are the *original* authors of the package.
- package **maintainers**, the people who *currently* maintain the package.

:::{dropdown} Learn More: What's the difference between author and maintainer?
:color: secondary

When adding maintainers and authors, you may want to think about the difference between the two.

Authors generally include people who:
* originally created / designed developed the package and
* people who add new functionality to the package.

Whereas maintainers are the people that are currently, actively working on the project. It is often the case that there is overlap in authors and maintainers. As such these lists may be similar or the same.

A good example of when the lists might diverge is sometimes you have a package where an initial author developed it and then stepped down as a maintainer to move on to other things. This person may continue to be considered an author but no longer actively maintains the package.

It is important to note that there are many ways to define author vs maintainer and we don't prescribe a single approach in this tutorial.

However, we encourage you to consider carefully, for PyPI publication, who
you want to have listed as authors and maintainers on your PyPI landing page.
:::

The `description` is just a string like the other values you've set:

```toml
# you can use """ for multiline strings like in python!

description = """
Tools that update the pyOpenSci contributor and review metadata 
that is posted on our website
"""
```

When you add `authors` and `maintainers` you need to use a format that will look like a Python list with a dictionary within it:

```toml
authors = [
  { name = "Firstname Lastname", email = "email@pyopensci.org"},
  { name = "Secondperson Fullname", email = "email2@pyopensci.org" }
]

maintainers = [
  { name = "Secondperson Fullname", email = "email2@pyopensci.org" },
  { name = "New Friend", email = "newbie@pyopensci.org" }
]
```

:::{admonition} Author names & emails
:class: note

There is a quirk with PyPI for authors that have names but not emails in the pyproject.toml. If you are missing the email for one or more authors or maintainers, like this:

```toml
maintainers = [{ name = "Firstname lastname", email = "email@pyopensci.org" }, { name = "Firstname lastname" }]
```

Then we suggest that you only provide names in your list of names to ensure that everything renders properly on your PyPI page - like this:

```toml
maintainers = [{ name = "Firstname lastname"}, { name = "Firstname lastname" }]
```

don't have emails for everyone, we suggest that you only add names.

:::

Your `pyproject.toml` file now should look like the example below. It is OK if you only have 1 author and the same author is also maintainer of your package:

```toml
[project]
name = "pyospackage"
version = "0.1.0"
description = """
Tools that update the pyOpenSci contributor and review metadata 
that is posted on our website
"""
authors = [
  { name = "Firstname Lastname", email = "email@pyopensci.org"},
  { name = "Secondperson Fullname", email = "email2@pyopensci.org" }
]
maintainers = [
  { name = "Secondperson Fullname", email = "email2@pyopensci.org" },
  { name = "New Friend", email = "newbie@pyopensci.org" }
]
```


### `classifiers`

Next you will add classifiers to your `pyproject.toml` file. The value for each classifier that you add to your `pyproject.toml` file must come from the list of [PyPI accepted classifier values found here](https://PyPI.org/classifiers/). Any deviations in spelling and format will cause issues when you publish to PyPI.

:::{admonition} What happens when you use incorrect classifiers?
:class: tip

If you do not [use standard classifier values](https://PyPI.org/classifiers/), when you try to publish your package on PyPI it will be rejected. 😔 Don't worry if PyPI rejects you on your first try! It has happened to all of us.
:::

Review that list and add items below to your `pyproject.toml` file:

- development status
- intended audiences
- topic
- license and
- programming language support

The classifier key should look something like the example below. A few notes:

- Your classifier values might be different depending upon the license you have selected for your package, your intended audience, development status of your package and the Python versions that you support
- You can add as many classifiers as you wish as long as you use the [designated PyPI classifier values](https://PyPI.org/classifiers/).

Now your `pyproject.toml` should look like this:

{emphasize-lines="16-24"}
```toml
[project]
name = "pyospackage"
version = "0.1.0"
description = """
Tools that update the pyOpenSci contributor and review metadata 
that is posted on our website
"""
authors = [
  { name = "Firstname Lastname", email = "email@pyopensci.org"},
  { name = "Secondperson Fullname", email = "email2@pyopensci.org" }
]
maintainers = [
  { name = "Secondperson Fullname", email = "email2@pyopensci.org" },
  { name = "New Friend", email = "newbie@pyopensci.org" }
]
classifiers = [
    "Development Status :: 4 - Beta",
    "Intended Audience :: Developers",
    "Topic :: Software Development :: Build Tools",
    "License :: OSI Approved :: MIT License",
    "Programming Language :: Python :: 3 :: Only",
    "Programming Language :: Python :: 3.10",
    "Programming Language :: Python :: 3.11",
]
```

Note that while classifiers are not required in your `pyproject.toml` file, they will help users find your package. As such we strongly recommend that you add them.

### Add package dependencies

Next add your dependencies table to the project table.
The `dependencies =` section contains a list (or array in the toml language) of the Python packages that your package requires to run properly in a Python environment. Similar to the requirements listed in the  `[build-system]` table above:

```toml
[build-system] # <- this is a table
requires = ["hatchling"] # this is an array (or list) of requirements
```
dependencies are added in an array (similar to a Python list) structure.

```toml
dependencies = ["numpy", "requests", "pandas", "pydantic"]
```

Dependencies can, and usually should come with a **version specifier.** A plain dependency says that your package can work with any version of that dependent package. Code changes over time, bugs are fixed, APIs change, and so it's good to be clear about which version of the dependency you wrote your code to be compatible with.

[Learn more about various ways to specify ranges of package versions here.](https://packaging.python.org/en/latest/specifications/version-specifiers/#id5)

The most common version specifier is a **lower bound,** allowing any version higher than the specified version. Ideally you should set this to the lowest version that is still compatible with your package, but in practice for new packages this is often set at the version that was current at the time the package was written.

Lower bounds look like this:

```toml
dependencies = [ "numpy>=1.0" ]
```

You can combine specifiers with commas, and use different kinds of specifiers for each package in your `dependencies` section:

```toml
dependencies = [
  "numpy>=1.0", 
  "requests==10.1", 
  "pandas", 
  "pydantic>=1.7,<2"
]
```

:::{admonition} Pin dependencies with caution
Pinning dependencies refers to specifying a specific version of a dependency like this `numpy == 1.0`. In some specific cases, you may chose to pin a package version for a specific package dependency.

Note that unless you are building an application, you want to be cautious about pinning dependencies. This is because
users will be installing your package into various environments. A pinned dependency can make resolving an environment more challenging to resolve. As such only pin dependencies to a specific version or bound if you absolutely need to do so.

One build tool that you should be aware of that pins dependencies by default is Poetry. [Read more about how to safely add dependencies with Poetry, here.](../package-structure-code/python-package-build-tools.html#challenges-with-poetry)
:::

Your `pyproject.toml` will now look like this!

{emphasize-lines="25-30"}
```toml
[project]
name = "pyospackage"
version = "0.1.0"
description = """
Tools that update the pyOpenSci contributor and review metadata 
that is posted on our website
"""
authors = [
  { name = "Firstname Lastname", email = "email@pyopensci.org"},
  { name = "Secondperson Fullname", email = "email2@pyopensci.org" }
]
maintainers = [
  { name = "Secondperson Fullname", email = "email2@pyopensci.org" },
  { name = "New Friend", email = "newbie@pyopensci.org" }
]
classifiers = [
    "Development Status :: 4 - Beta",
    "Intended Audience :: Developers",
    "Topic :: Software Development :: Build Tools",
    "License :: OSI Approved :: MIT License",
    "Programming Language :: Python :: 3 :: Only",
    "Programming Language :: Python :: 3.10",
    "Programming Language :: Python :: 3.11",
]
dependencies = [
  "numpy>=1.0", 
  "requests==10.1", 
  "pandas", 
  "pydantic>=1.7,<2"
]
```

### Requires-python

Finally, add the `requires-python` field to your `pyproject.toml` `[project]` table. The `requires-python` field, helps pip understand the lowest version of Python that you package supports when it's installed. It is thus a single value.

`requires-python = ">=3.10"`

It supports the same version syntax as dependencies, and the same caveats about being too restrictive with versions apply.

### Add your README and license

In the previous lessons, you added both a [README.md](add-readme) file and a [LICENSE](add-license-coc) to your package repository.
Once you have those files, you can add them as paths relative to the `pyproject.toml` file following the example below.

```toml
readme = "README.md"
license = {file = "LICENSE"}
```

This will tell your build tool to include these files in built distributions, and will let tools that scan package metadata understand how to display your readme and what license you are using.

Your `pyproject.toml` file will now look like this:

{emphasize-lines="31-32"}
```toml
[project]
name = "pyospackage"
version = "0.1.0"
description = """
Tools that update the pyOpenSci contributor and review metadata 
that is posted on our website
"""
authors = [
  { name = "Firstname Lastname", email = "email@pyopensci.org"},
  { name = "Secondperson Fullname", email = "email2@pyopensci.org" }
]
maintainers = [
  { name = "Secondperson Fullname", email = "email2@pyopensci.org" },
  { name = "New Friend", email = "newbie@pyopensci.org" }
]
classifiers = [
    "Development Status :: 4 - Beta",
    "Intended Audience :: Developers",
    "Topic :: Software Development :: Build Tools",
    "License :: OSI Approved :: MIT License",
    "Programming Language :: Python :: 3 :: Only",
    "Programming Language :: Python :: 3.10",
    "Programming Language :: Python :: 3.11",
]
dependencies = [
  "numpy>=1.0", 
  "requests==10.1", 
  "pandas", 
  "pydantic>=1.7,<2"
]
readme = "README.md"
license = {file = "LICENSE"}
```

## Add the `[project.urls]` table

Finally, add the project.urls table to your
pyproject.toml file.

`project.urls` contains links that are relevant for your project. You might want to include:

- **Homepage:** A link to your published documentation for your project. If you are working through this tutorial, then you may not have this link yet. That's ok, you can skip it for the time being.
- **Bug reports:** a link to your issues / discussions or wherever you want users to report bugs.
- **Source:** the GitHub / GitLab link for your project.

```toml
[project.urls] # Optional
"Homepage" = "https://www.pyopensci.org"
"Bug Reports" = "https://github.com/pyopensci/pyosmeta/issues"
"Source" = "https://github.com/pyopensci/pyosmeta/"
```

:::{tip}
There are many other urls that you can add here. Check out the [README file here for an overview](https://github.com/patrick91/links-demo).
:::

## Putting it all together - your completed pyproject.toml file

Below is an example of a complete `pyproject.toml` file that
is commented with all of the sections we discussed above.

```toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "pyospackage"
version = "0.1.0"
description = """
Tools that update the pyOpenSci contributor and review metadata 
that is posted on our website
"""
authors = [
  { name = "Firstname Lastname", email = "email@pyopensci.org"},
  { name = "Secondperson Fullname", email = "email2@pyopensci.org" }
]
maintainers = [
  { name = "Secondperson Fullname", email = "email2@pyopensci.org" },
  { name = "New Friend", email = "newbie@pyopensci.org" }
]

classifiers = [
    "Development Status :: 4 - Beta",
    "Intended Audience :: Developers",
    "Topic :: Software Development :: Build Tools",
    "License :: OSI Approved :: MIT License",
    "Programming Language :: Python :: 3 :: Only", # BE sure to specify that you use python 3.x
    "Programming Language :: Python :: 3.10",
    "Programming Language :: Python :: 3.11",
]
dependencies = [
  "numpy>=1.0", 
  "requests==10.1", 
  "pandas", 
  "pydantic>=1.7,<2"
]
readme = "README.md"
license = {file = "LICENSE"}

[project.urls] # Optional
"Homepage" = "https://www.pyopensci.org"
"Bug Reports" = "https://github.com/pyopensci/pyosmeta/issues"
"Funding" = "http://example.com/funding-source/"
"Source" = "https://github.com/pyopensci/pyosmeta/issues"
```

## Publish a new version of your package to PyPI

You are now ready to publish a new version of your Python package to (test) PyPI. When you do this you will see that the landing page for your package now contains a lot more information.

Try to republish now.

First, update the version of your package in your pyproject toml file. Below version is updated from
`0.1.0` to `0.1.1`.

```TOML
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "pyospackage"
version = "0.1.1"
```

Now use hatch to publish the new version of your package to test.PyPI.org.

```bash
> hatch publish -r test

```

### Next (optional) step - publishing to conda-forge

You now have all of the skills that you need to publish
your package to PyPI.

If you also want to publish your package on conda-forge (which is a channel within the conda ecosystem), you will learn how to do that in the next lesson.


:::{todo}
Really good resources frm jeremiah https://daniel.feldroy.com/posts/2023-08-pypi-project-urls-cheatsheet useful (and the linked links-demo even more so)
:::

## <i class="fa-solid fa-hands-bubbles"></i> Wrap up


At this point you've created:

* A [README.md](add-readme) file for your package
* A [CODE_OF_CONDUCT.md](add-coc) file to support your user community
* And a [LICENSE](add-license-coc) file which provides legal boundaries around how people can and can't use your software

You also learned [how to publish your package to (test)PyPI](publish-pypi).

## Appendix - Example `pyproject.toml` files

Below are some examples of `pyproject.toml` files from various packages in the scientific and pyOpenSci ecosystem.
* [PyPA's fully documented example pyproject.toml file](https://github.com/pypa/sampleproject/blob/main/pyproject.toml)
* [taxpasta has a nicely organized pyproject.toml file and is a pyOpenSci approved package](https://github.com/taxprofiler/taxpasta/blob/f9f6eea2ae7dd08bb60a53dd49ad77e4cf143573/pyproject.toml)

### A fully commented pyproject.toml file

Below is a fully commented pyproject.toml file if you want to use it for reference.

```toml
# You can delete all of the comments once you have created your own pyproject.toml file.

# The build system table. Here we use hatchling as the build back end tool.
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

# The [project] section contains your package's metadata
# notice that the version is setup to be dynamically generated using dynamic=[“version”]

[project]
name = "pyospackage"
# dynamic = ["version"] # you will learn how to dynamically set the version in a future lesson
version = "0.1.0" # manually assign version (not preferred)
description = "Tools that update the pyOpenSci contributor and review metadata that is posted on our website"
authors = [{ name = "Firstname lastname", email = "email@pyopensci.org" }]

# maintainers section is optional but suggested.
maintainers = [
    { name = "firstname lastname", email = "admin@pyopensci.org" }, # Optional
]

# Classifiers have set values - be sure to only use classifier values from the
# PyPI page here: https://PyPI.org/classifiers/

classifiers = [
    # How mature is this project? Common values are
    #   3 - Alpha
    #   4 - Beta
    #   5 - Production/Stable
    "Development Status :: 4 - Beta",

    # Indicate who your project is intended for
    "Intended Audience :: Developers",
    "Topic :: Software Development :: Build Tools",

    # Pick your license (using syntax from the classifier page). We suggest MIT, BSD3 or Apache if you are corporate
    "License :: OSI Approved :: MIT License",

    # Specify the Python versions ensuring that you indicate you support Python 3.
    # this is only for PyPI and other metadata associated with your package - for your users to see
    "Programming Language :: Python :: 3 :: Only", # BE sure to specify that you use python 3.x
    "Programming Language :: Python :: 3.10",
    "Programming Language :: Python :: 3.11",
]


dependencies = ["xarray", "requests"]
# This is the metadata that pip reads to understand what versions your package supports
requires-python = ">=3.10"
readme = "README.md"
license = { FILE = "LICENSE" }

# Add urls for your home page, issue tracker and source code
[project.urls] # Optional
"Homepage" = "https://www.pyopensci.org"
"Bug Reports" = "https://github.com/pyopensci/pyospackage/issues"
#"Funding" = ""
"Source" = "https://github.com/pyopensci/pyospackage"


```
