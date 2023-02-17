# The Python Package Source and Wheel Distributions

There are two core distribution files
that you need to create to publish your Python package to
PyPI:

1. a Source Distribution (SDist)
2. a Wheel (.whl).

## Source vs. Binary Files

It's important to understand the two "types" of distribution files. You can
think about files as either source or binary:

**Source files:** source files are the unbuilt files needed to build your
package. These are the "raw / as-is" files that you store on GitHub or whatever
platform you are using to manage your code repository.
**Binary files:** binary files are the source files after they've been built.
These files have been compiled (if they require compilation) and are ready
to be installed.

### Python package distribution types: SDist and Wheels
There are two types of distribution files that you will create to support
publishing your Python package on PyPI:

1. SDist and
1. Wheel

<!--
* **SDist (Source Distribution):** This file, packaged as a **.tar.gz** tarball represents all of the unbuilt source files needed to build your package into an installable bundle. But the files within the package are not yet "built" if your package requires a  build step. Pure python packages most often do not require a build step.
* **Wheel:** A wheel (**.whl**) is a **.zip** file containing all of the files needed to directly install your package. All of the files in a wheel are binaries - this means that code is already compiled / built. Wheels are thus faster to install - particularly if you have a package that requires build steps. -->

```{note}
If your package is a pure python package with no additional
build / compilation steps then the SDIST and Wheel files will have
similar content.
```

### What is a source distribution (SDist)?

**S**ource **D**istributions, referred to as SDist, is a set of files saves as
a `.tar.gz` archive (often called a "tarball"). The SDist has all of the files
needed to build your
package. As the name implies, a SDIST contains the source code; it has not been
built or compiled in any way. Thus, when a user installs your source
distribution using pip, pip needs to run a build step first.


<!-- TODO: will work on cleaning up this after adding MANIFEST and then
add a section on the MANIFEST file for packaging and link to
https://packaging.python.org/en/latest/guides/using-manifest-in/-->

```
stravalib-1.1.0.post2-SDist.tar.gz file contents

├─ 📂 stravalib
│  ├─ tests
│  │  ├─ integration
│  │  │  ├─ __init__.py
│  │  │  ├─ conftest.py
│  │  │  ├─ strava_api_stub.py
│  │  │  └─ test_client.py
│  │  ├─ unit
│  │  │  ├─ __init__.py
│  │  │  ├─ test_attributes.py
│  │  │  ├─ ...
│  │  ├─ __init__.py
│  │  ├─ auth_responder.py
│  │  └─ test.ini-example
│  ├─ util
│  │  ├─ __init__.py
│  │  └─ limiter.py
│  ├─ __init__.py
│  ├─ _version.py
│  ├─ _version_generated.py
│  ├─ attributes.py
│  ├─ ...
├─ stravalib.egg-info
│  ├─ PKG-INFO
│  ├─ SOURCES.txt
│  ├─ dependency_links.txt
│  ├─ requires.txt
│  └─ top_level.txt
├─ CODE_OF_CONDUCT.md
├─ CONTRIBUTING.md
├─ LICENSE.txt
├─ MANIFEST.in
├─ Makefile
├─ PKG-INFO
├─ README.md
├─ changelog.md
├─ environment.yml
├─ pyproject.toml
├─ requirements-build.txt
├─ requirements.txt
└─ setup.cfg

```

```{admonition} GitHub archive vs SDist
:class: tip
When you make a release on GitHub, it creates a `git archive` that contains all
of the files in your GitHub repository. While these files are similar to an
SDist, these two archives are not the same. The SDist contains a few other
items including a metadata directory and if you use `setuptools_scm` or `hatch_vcs`
the SDist will also contain a `_version.py` file.
```

<!--
* one of the benefits of wheel is pretty much avoiding setup.py which
has code mixed in. makes you more vulnerable to a code injection on install.

assuming this means if the package is already pre-built than setup.py isn't running anything on install because install is just moving files across to the machine to be run.

And having metadata separate allows someone to view the metadata without
running any python code as it's a machine and human readable format.

https://scikit-hep.org/developer/pep621
-->

### Wheel (.whl files):

A wheel file is a ZIP-format archive whose filename follows a specific format
(below) and has the extension `.whl`. The `.whl` archive contains a specific
set of files, including metadata that are generated from your project's
pyproject.toml file. The pyproject.toml and other files that may be included in
source distributions are not included in wheels because it is a built
distribution.

 The wheel does not contain any of your
packages configuration files such as **setup.cfg** or **pyproject.toml**. This
distribution is already built so it's ready to install.

Because it is built, the wheel file will be faster to install for pure Python
projects and can lead to consistent installs across machines.


<!-- TODO - i need to clarify this as i've gotten mixed feedback on the
real security issues with this IF the whl is already built and that file isn't
included what is the issue? i need more input here-->


```{tip}
Wheels are also useful in the case that a package
needs a **setup.py** file to support a more complex build.
In this case, because the files in the wheel bundle
are pre built, the user installing doesn't have to
worry about malicious code injections when it is installed.
```

The filename of a wheel contains important metadata about your package.

Example: **stravalib-1.1.0.post2-py3-none.whl**

* packageName: stravalib
* packageVersion: 1.1.0
* build-number: 2 (post2) [(read more about post here)](https://peps.python.org/pep-0440/#post-release-separators)
* py3: supports Python 3.x
* none: is not operating system specific (runs on windows, mac, linux)
* any: runs on any computer processor / architecture

What a wheel file looks like when unpacked (unzipped):

```
stravalib-1.1.0.post2-py3-none.whl file contents:

├─ 📂 stravalib
│  ├─ tests
│  │  ├─ functional
│  │  │  ├─ __init__.py
│  │  │  ├─ test_client.py
│  │  ├─ unit
│  │  │  ├─ __init__.py
│  │  │  ├─ test_attributes.py
│  │  ├─ __init__.py
│  │  ├─ auth_responder.py
│  │  └─ test.ini-example
│  ├─ util
│  │  ├─ __init__.py
│  │  └─ limiter.py
│  ├─ __init__.py
│  ├─ _version.py
│  ├─ _version_generated.py
│  ├─ attributes.py
│  ├─ client.py
└─ stravalib-1.1.0.post2.dist-info  # Package metadata are stored here
   ├─ LICENSE.txt
   ├─ METADATA
   ├─ RECORD
   ├─ WHEEL
   └─ top_level.txt

```

```{tip}
[Read more about the wheel format here](https://pythonwheels.com/)
```
