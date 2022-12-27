# Creating New Versions of Your Python Package 

## Section about releases
* mention release should be incremetal 
* rep changes in the code that are either patches, minor fixes, major updates

pyOpenSci recommends that you follow the [Python PEP440](https://peps.python.org/pep-0440) which recommends using  
[semantic versioning guidelines](https://www.python.org/dev/peps/pep-0440/#semantic-versioning) 
when assigning release values to new package versions. 

[Semantic versioning, discussed in detail at semver.org,](https://semver.org/) uses the following approach to bumping your
package's versions:

> Given a version number MAJOR.MINOR.PATCH, increment the:
> 
>   * **MAJOR version** when you make incompatible API changes
>   * **MINOR version** when you add functionality in a backwards compatible manner
>   * **PATCH version** when you make backwards compatible bug fixes
> Additional labels for pre-release and build metadata are 
> available as extensions to the MAJOR.MINOR.PATCH format.


```{tip}
Resources:

* Poetry bump version - go discussion here - https://py-pkgs.org/07-releasing-versioning#manual-version-bumping

```


```{important}
pyOpenSci  requires that your package has an installable distribution that can be installed from a public community repository such as PyPI or a conda channel.
```

## Tools to manage versions for your Python package 

PyOpenSci doesn't require any specific tools to support 
creating an installable distribution for (packaging) and releasing your package. HOwever there are a handful that 
have been broadly adopted by the scientific python community, 
and we provide an overview of each of those below. 

If you are on the fence about what tool to use, we suggest 
that you use `setuptools-scm`.  

### Tools for bumping Python package versions
There are many tools available to manage "bumping" and naming versions for your Python 
package. 

```{note}
Bumping a package version refers to the step of increasing the package 
version after a set number of changes have been made to it. For example,
you might bump from version 0.8 to 0.9 of a package. or from 0.9 to 1.0. 

Using semantic versioning, there are three main "levels"
of versions that you might consider:

Major, minor and patch. These are described in more detail below.
``` 

Below we discuss some of the tools that are most common 
in the Python scientific package ecosystem. We do not require 
you to use a specific tool. We simply recommend tools based on 
what the community is currently using. 

The list below are the tools discussed on this page:

* setuptools-scm
* bump2version (last commit mar 2 - is it maintained?) - https://github.com/c4urself/bump2version
* versioneer
* python-semantic-version

### Tool 1: setuptools-scm a light weight version option

[`Setuptools-scm`](https://github.com/pypa/setuptools_scm/) is one of the more popular tools see in our packages 
both within the [pyOpenSci package ecosystem](https://www.pyopensci.org/python-packages) and across the Python Scientific ecosystem.

We like `setuptools-scm` because:

**Pros** 
* It creates a single-source file that contains your package version. 
* You never manually update the package version 
* You can automate writing the version anywhere in your package including your documentation! 
* It supports a purely GitHub based release workflow. This simplifies maintenance workflows.
* Version number is updated in your package via a hidden `_version.py` file. There is no manual configuration updates required. 
* While we like detailed commit messages (See Python Semantic Version below), we know that sometimes when maintaining a package specific guidelines around commit messages can be hard to apply and manage. 

**Cons** 
* In a CI workflow you will end up manually entering or creating the version number via a TAG on GitHub.
* Not well documented (we hope to fix that!)

```{important}
pyOpenSci will be creating tutorials on working with `setuptools-scm` and GitHub releases to 
update versions of your package and push to PyPI. These should be published sometime 
during the spring/summer 2023. In the meantime [here is a high quality blog post 
that will help you get started with using setuptools-scm](https://www.moritzkoerber.com/posts/versioning-with-setuptools_scm/)
```

### Tool 2: [Python semantic release](https://python-semantic-release.readthedocs.io/en/latest/)


**Pros** 
* Follows semver versioning closely 
* Enforces maintainers using descriptive commit messages which can simplify troubleshooting 

**Cons** 
* requires very specific commit language to work. In practice some maintainers may not be able to maintain that level of specificity in commit messages  (altho there are bots to help with commit checks)
* Release happens at the command line. This makes is harder to implement a GitHub based release workflow as the wrong commit message could trigger a release. 
* The version number is manually updated in a configuration file such as `pyproject.toml` vs. in the package itself.  

As the name implies, Python Semantic Release follows python 
semantic version release rules. 
Python Semantic Release, similar to **setuptools-scm**, also helps you automate version release workflows. 

However, this tool differs 
from **setuptools-scm**. With **setuptools-scm**, a version 
control tag, is used to trigger a version update. 
With Python semantic release, versions are triggered using 
specific language found in a repository commit message. 

For example, the words `fix(attribute_warning):` trigger Python Semantic Release to implement a patch version bump. 
So for instance if your package was at version 1.1.0 and you 
made the commit below with the words fix(text-here), Python Semantic Release would bump your package to version 1.1.1.

```bash
$ git commit -m "fix(mod_plotting): fix for warnings returned for some athlete attributes"
```

Similarly a feature (`feat()`) triggers a minor version bump.
For example from version 1.1 to version 1.2

```bash
git commit -m "feature(add_conversions): add value conversions to activity date using pint"
```

```{tip}
You can find a thoughtful discussion of python semantic version [in this Python package guide.](https://py-pkgs.org/07-releasing-versioning#automatic-version-bumping). Note that the guide hasn't been updated since 2020 and as such some of the commands are now dated in it. 
``` 

### Tool 3: Versioneer 

I haven't used this tool before... 
Ask martin???

### Tool 4: Bump version

* Versioning can be done using [bumpversion](https://github.com/peritus/bumpversion), e.g. for a minor update:

```
bumpversion minor
```

"minor" can be replaced with "major" or "patch" depending on the level of update.