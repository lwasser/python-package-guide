# Code style and structure: Python  

```python
>>> import this
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```

Python packaging is a quickly evolving space. This chapter will review 
best practices for formatting and styling your Python code. 

If you plan to submit a package for [open peer review to pyOpenSci](https://www.pyopensci.org/about-peer-review/) and are looking for 
some guidance on package structure, code formats and style, then this section is for you. 


```{include} ../../README.md
:relative-images:
```

```{note}
If you are considering submitting a package to pyOpenSci, or if you are just 
getting started with building a package, [you may want review the initial  bare-minimum editor-in-chief-checks editor checks.](https://www.pyopensci.org/peer-review-guide/software-peer-review-guide/editor-in-chief-guide.html#editor-checklist-copy-template-below-to-use-in-the-issue) that pyOpenSci
performs before a review begins. 

In general these are basic items that should be in any open software repository. 
```





```{tip}
## Python packaging resources that we love 

Below are some other resources that support Python package that 
you might enjoy. 

* [Python packaging for research software engineers](https://merely-useful.tech/py-rse/)
* PyPA also has a [short tutorial](https://packaging.python.org/tutorials/packaging-projects/)
* short 2021 pycon talk: https://youtu.be/j8iXO5VErjw
https://www.youtube.com/watch?v=ApDThpsr2Fw 
```

<!-- 

These checks include several items

- **Sufficient Documentation** The package has sufficient documentation available online (README, sphinx docs) to allow us to evaluate package function and scope *without installing the package*. This includes:
  Get started tutorials or vignettes that help a user understand how to use the package and what it can do for them (often these have a name like "Getting started")
- **API documentation** - this includes clearly written doc strings with variables defined using a standard docstring format -->


