# Python Package Build Tools 

Where i'm leaving off here 

* setuptools is the OG clearly a lot of ppl use it. but the code base seems 
really messy and it's built on top of disutils that may be sunsetted i python 3.12 ?? so does it make sense for us all to use it or should we consider 
an example using hatch which seems really nice. extensible and has vcs built 
in as far as i can tell 

Below talk about each tool and the potential drawbacks.
post on slack about setuptools (next week) and also maybe discord.

I think this page should be it's own separate PR as i really want eyes on it. 
So more eyes == better. 
I can then have another Pr that has package structure...



## Python package distribution files 

There are two types of distribution files that you will create to support 
publishing your Python package:

* SDist additional
* a wheel

### What is a SDist file? 

SDist, short for **S**ource **D**istribution file is a packaged file in `.tar.gz` 
format (often called a "tarball") that has all of the files needed to build your 
package. In the SDist format, your package's files are not included in a built 
format. Thus, anyone using this file, will have to build the files first before 
they can be installed. 

```{tip}
When you make a release on GitHub, it creates a SDist file (`.tar.gz`) that 
anyone can download and use. 
```


<!--
TODO: confused about what the build step really is. 
what does it mean to have a binary / built compiled etc?
* Also if the package is pure python you can pip install from source directly - so i'm confused about what a wheel provides over that? or is that wheel essentually the output of pip install and so it's relaly just moving files to the install directory without any build (pip i think can build?)

* i think one of the benefits of wheel is pretty much aboiing setup.py which 
has code mixed in. makes you more vulnerable to a code injection on install. 

And having metadata separate allows someone to view the metadata without 
running any python code as it's a machine and human readable format.

https://scikit-hep.org/developer/pep621
-->

### Wheel (.whl files):  

A wheel or `.whl` file, is a zipped file that has 
the extension `.whl`. The wheel does not contain any of your packages 
configuration files such as **setup.cfg** or **pyproject.toml**. This distribution 
is a pre-build, ready-to-install format.

Because it is prebuilt, the wheel file will be faster to install for pure Python 
projects and can lead to consistent installs across machines. 

[Read more about the wheel format here](https://pythonwheels.com/)

## Tools to build python packages 

There are a suite of build tools that you can use for creating package distributions for your Python package. Before discussing some of the 
more popular toole, it's important to clarify the difference between a 
build tool front-end and build backend. 

## Build front-end vs build backend 

Each tool discussed below has both a front end interface that you can use to 
perform different types of Python packaging tasks. Each also has a back-end 
build tool that actually builds the package and creates associated distribution 
files. The backend build tool for each package, runs the steps needed to 
create a package wheel and tarball (zipped up version of all of 
the package files).

Some of these tools provide additional front-end functionality. For instance, 
you can use Flit to both build (it has a build-backend) and to publish directly 
to PyPI (or test PyPI) using the front-end tool. 

`flit publish --repository testpypi` 

This means that you don't need to remember another tool (like `twine`) to publish 
to PyPi. But Flit also offers a build backend too. This allows you to run:

`flit build`

To build your package. Flit thus makes your workflow commands consistent and simple. 

If you are using `setuptools`, then you will need to use `twine` to publish to PyPI. 

## An ecosystem of Python build tools

Below we introduce several of these tools that support publication on 
PyPI. Each tool has various features that might make you chose to use it 
or not use it. There is no right or wrong tool to use as far as pyOpenSci is 
concerned. We are just trying to help you find the tool that works best for 
your workflow. 

The tools that we review below include:

* setuptools 
* flit 
* hatch
* pdm 


These tools were some of the most popular tools listed in hte PyPA packaging
survey that was run in 2022 <link to data and add plot that i make>

```{note}
Note that we are intentionally not including poetry in this list. because

* add reasons here `^` for pinning deps 
* look at how it creates a pyproject toml file too... 

TRANSLATE THIS into something easier to understand: Upper limits in dependencies: ^3.6 should be changed to >=3.6. Poetry will force you to add an upper limit if a package you include does this, though, so the bad practice percolates.
```


## How to chose a build development tool

When deciding what tools you wish to use, there are a few basic criteria that 
you can use to help guide your decision:

If your package is a pure Python package and it doesn't have any additional build steps (such as compiling code, etc) you can use any of the tools discussed on 
this page.
 
* If your package is not pure python, or it has complex build steps (or build
steps that you need to customize), then you should consider using: 
setuptools, or hatch. 

Both of these tools allow you to customize your workflow with build steps needed 
to compile code. 

setuptools is the "OG" tool that has been around for a long time. 
hatch is the newer tool - flit like but supports customization. 

## Tools with built in versioning 

* setuptools_scm
* hatch_vcs

TODO - which tools have VSC compatible - hatch-vcs does pdm have that?
i still don't understand why you'd use hatch vs pdm .

A summary of what each of the tools offers can be found in the table below:

REMOVE POETRY BELOW:
|                                                         | Setuptools                                              | Flit                         | Hatch     | Poetry       | PDM        |
| ------------------------------------------------------- | ------------------------------------------------------- | ---------------------------- | --------- | ------------ | ------------ |
| Build backend                                           | setuptools.build\_meta                                  | flit\_core                   | hatchling | poetry\_core |              |
| Supports projects that aren't pure python               | yes                                                     | no                           | yes       | no           | yes          |
| Supports custom build steps (before creating wheel)     | yes                                                     | no                           | yes       | no           | yes          |
| Has built in dependency management                      | no                                                      | no                           | no        | yes          | no           |
| Can be used to publish directly to pypi                 | no (use twine)                                          | yes                          | yes       | yes?         | ?            |
| Has versioning tooling                                  | setuptools\_scm                                         |                              |           | yes          |              |
| Supports automated GitHub only releases (no CLI needed) | yes (GitHub only)                                       |                              |           | no           |              |
| Used by core scientific Python packages                 | Xarray, geopandas, pandas                               |                              |           | no?          | scipy, numpy |
| One tool does everything                                | No (need scm for versioning but it's very light weight) | Yes???? might need flit\_vcs | ?         | Yes          |


## Setuptools 


## Flit 


many thanks to the resources here: https://henryiii.github.io/level-up-your-python/notebooks/2.7%20Creating%20Packages.html# 

