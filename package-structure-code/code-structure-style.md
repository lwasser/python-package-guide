# Code Style and Structure 

```{warning}
## TODO add PEP to the appendix maybe of terms?  DEFINE LINT 

* https://www.flake8rules.com/
``` 

One of the core principles of Python programming is readability. 
Following community guidelines around how your Python code is formatted is important as it makes your code more readable.

Consider a language (such as english). We are used to seeing 
the first word in english capitalized with a single space between
each word. WHATHAPPENS WHENYOU write in all caps with no spaces? 

Your English is now much harder to read by others (and you too probably) when you don't follow style guidelines.

The same rule applies for code. 

## Guidelines for Python code syntax and code stylers

On this page we will provide guidelines for:

1. **Python Code syntax:** This entails python PEP 8 guidelines for how to write readable python code. Whenever possible we follow Python PEP standards 
2. **Python code style:** When we say code style, we are referring to decisions made about how the code looks including indentation, and new lines that are not necessarily covered explicitly in the `PEP 8` syntax guidelines. 

We will also highlight code formatters that will both automate 
the process of and help you 
ensure that your Python code is readable and follows `PEP 8` 
guidelines. 

## Follow PEP 8 guidelines for python code syntax

pyOpenSci wants all packages to follow the [python PEP8 style guide](https://peps.python.org/pep-0008/) for decisions 
relating to Python code format in your open source Python package. 

We also strongly suggest that you also add a code styler like `black` or `blue` to your 
development workflow. Adopting a code styler removes any discussion 
around how code is formatted (outside of PEP 8 guidelines). This decision in turn makes maintenance simpler as every Pull request on GitHub (or GitLab) will be formatted *automagically* using your styler of choice. 

## Add code formatters to CI to automate code style checks 
We also suggest that you add a code format check step to your 
continuous integration build that will identify style issues as 
pull requests are submitted. 

## Code formatters 
Code formatters are tools that look at your code and identify problems such as:

* unused variables
* invalide styles 
* missing docstrings 
* incorrect spacing 

and more.

Some of these tools [(like `flake8`)](https://flake8.pycqa.org/en/latest/) alert you to changes that need 
to be made in your code. Others [(like `black`)](https://black.readthedocs.io/en/stable/), will reformat your code for you. 

Code formatters can be run:
*  as a command-line tool and/or 
* can also be setup as a part of your favorite programming tool (e.g. VScode, pycharm, etc),
* as a `pre-commit` hook that runs when you commit changes to the repository locally. 

Regardless of how you set code formatters, we suggest that you setup setting up a code formatters in your python package that runs in CI. We also suggest a code-styler such as black as will make maintenance easier by removing any decisions making around 
how your package code is formatted.  

These tools also give you automatic feedback about your code's structure as you (or a contributor) write it.

## Some popular code-formatters that we recommend 

* [flake8](https://flake8.pycqa.org/): `Flake8` is a popular tool that will identify all issues related to [PEP 8](https://www.python.org/dev/peps/pep-0008/) found in your code. 
* [isort](https://pycqa.github.io/isort/): `isort` sorts the imports at the top of your code to [follow PEP 8 standards for import order](https://peps.python.org/pep-0008/#imports)
* [black](https://black.readthedocs.io/): `Black` is one of the early "uncompromising code formatters". 
* [blue](https://blue.readthedocs.io/): `Blue` is similar to black however it allows for a bit more flexibilty in code stype. It also implements single quotes in your code vs double quotes which some programmers prefer. 


## TODO: this section is very tutorial like 

## Git pre-commit hook

Git pre-commit hook is a useful tool that checks your code automatically when you run a `git commit` at the command line. If the code styler needs to update your code or some checks fail, the `commit` is canceled locally. This is often used to make sure
that the changes to your code match a particular style, or that there are no
code linting errors.

For example, if you want that `git commit` checks if your code matches the PEP8 specification,
you can configure a git flake8 pre-commit hook:


```yaml
# file: .pre-commit-config.yaml
repos:
  - repo: https://gitlab.com/pycqa/flake8
    rev: '3.7.9'
    hooks:
    -   id: flake8

```

```{note}
See [the flake8 hooks explanation](https://flake8.pycqa.org/en/latest/user/using-hooks.html) for more details.
```

This file specifies a hook that will be triggered automatically before each `git commit`,
in this case, it specifies a flake8 using version `3.7.9`.

Before you can see any change, first you should install `pre-commit` library. 
One way to do it is using `pip` or `conda`:

```sh
pip install pre-commit

# or

conda install -c conda-forge pre-commit
```

Now, you can install your pre-commit hook using `pre-commit install`, and it will create the hook based on
the file `.pre-commit-config.yaml`.

Before each `git commit` command, in this case, git will run `flake8` and, if it fails, the `commit` will be canceled.


```{tip}
You can learn more about `pre-commit` hooks [in the online documentation](https://pre-commit.com/).
```

## Python function and class docstring style

We suggest that you adhere to the [numpy-style docstring format](https://numpydoc.readthedocs.io/en/latest/format.html). 
Numpy-style docstring are easy to read and also integrate well 
with the Sphinx `auto-doc` extension; `auto-doc` allows you to 
automagically create API documentation in your `sphinx` documentation if you are using Sphinx. (**TODO: add link** more on that 
in the documentation chapter).

```{note}
what is a docstring...
https://peps.python.org/pep-0257/#what-is-a-docstring
```

* https://numpydoc.readthedocs.io/en/latest/
* discussion on the 3 common docstring types: https://betterprogramming.pub/3-different-docstring-formats-for-python-d27be81e0d68 
* Ask on slack this week what resources people like for this

An example of a numpy-style docstring is below
```python 
def numpy_docstrings(num1, num2):
    """
    Add up two integer numbers.

    This function simply wraps the ``+`` operator, and does not
    do anything interesting, except for illustrating what
    the docstring of a very simple function looks like.

    Parameters
    ----------
    num1 : int
        First number to add.
    num2 : int
        Second number to add.

    Returns
    -------
    int
        The sum of ``num1`` and ``num2``.

    Raises
    ======
     MyException
        if anything bad happens

    See Also
    --------
    subtract : Subtract one integer from another.

    Examples
    --------
    >>> add(2, 2)
    4
    >>> add(25, 0)
    25
    >>> add(10, -10)
    0
    """
    return num1 + num2
  ```



See also:

- [mypy](http://mypy-lang.org/)
- [numpydoc](https://numpydoc.readthedocs.io/en/latest/)
- [pydocstyle](https://github.com/PyCQA/pydocstyle)




