Search.setIndex({"docnames": ["CONTRIBUTING", "ci-and-testing/intro", "code-style-structure/intro", "documentation/hosting-tools/intro", "documentation/hosting-tools/myst-markdown-rst-doc-syntax", "documentation/hosting-tools/publish-documentation-online", "documentation/hosting-tools/sphinx-python-package-documentation-tools", "documentation/hosting-tools/website-hosting-optimizing-your-docs", "documentation/index", "documentation/repository-files/code-of-conduct-file", "documentation/repository-files/contributing-file", "documentation/repository-files/development-guide", "documentation/repository-files/intro", "documentation/repository-files/license-files", "documentation/repository-files/readme-file-best-practices", "documentation/write-user-documentation/create-package-tutorials", "documentation/write-user-documentation/document-your-code-api-docstrings", "documentation/write-user-documentation/get-started", "documentation/write-user-documentation/intro", "index", "python-packaging/intro"], "filenames": ["CONTRIBUTING.md", "ci-and-testing/intro.md", "code-style-structure/intro.md", "documentation/hosting-tools/intro.md", "documentation/hosting-tools/myst-markdown-rst-doc-syntax.md", "documentation/hosting-tools/publish-documentation-online.md", "documentation/hosting-tools/sphinx-python-package-documentation-tools.md", "documentation/hosting-tools/website-hosting-optimizing-your-docs.md", "documentation/index.md", "documentation/repository-files/code-of-conduct-file.md", "documentation/repository-files/contributing-file.md", "documentation/repository-files/development-guide.md", "documentation/repository-files/intro.md", "documentation/repository-files/license-files.md", "documentation/repository-files/readme-file-best-practices.md", "documentation/write-user-documentation/create-package-tutorials.md", "documentation/write-user-documentation/document-your-code-api-docstrings.md", "documentation/write-user-documentation/get-started.md", "documentation/write-user-documentation/intro.md", "index.md", "python-packaging/intro.md"], "titles": ["Contributing Guide for the Python open source software packaging book", "CI and Testing - Coming Soon!", "Code style and structure", "Tools to Build and Host your Documentation", "Documentation syntax: markdown vs. myST vs. rst syntax to create your docs", "How to publish your Python package documentation online", "Using Sphinx to Build Python Package Documentation", "Optimizing your documentation so search engines (and other users) find it", "Documentation for your Open Source Python Package", "The CODE_OF_CONDUCT.md file In Your Python Open Source Package", "Contributing File in your Python Open Source Package", "What the development guide for your Python package should contain", "Documentation Files That Should be in your Python Package Repository", "Your repository should have a LICENSE.md file", "README File Guidelines and Resources", "Create tutorials in your Python package documentation", "Document the code in your package\u2019s API using docstrings", "Create User Facing Documentation for your Python Package", "Writing user-facing documentation for your Python package", "pyOpenSci Python Open Source Package Development Guide", "Python Packaging Tools\u2026 Coming soon\u2026"], "terms": {"i": [0, 1, 3, 4, 6, 7, 9, 12, 13, 14, 15, 17, 18, 20], "commun": [0, 6, 7, 8, 9, 12, 17, 19], "resourc": [0, 19], "we": [0, 3, 4, 5, 6, 7, 8, 9, 11, 12, 14, 15, 17, 18, 19, 20], "welcom": [0, 6, 8, 10], "form": 0, "issu": [0, 7, 8, 10, 17, 19], "pull": [0, 5, 10, 11, 15], "request": [0, 5, 10, 11, 15], "If": [0, 4, 5, 7, 8, 9, 11, 13, 14, 15, 16, 19], "you": [0, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 16, 17, 18], "have": [0, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 19], "an": [0, 4, 7, 8, 11, 12, 13, 14, 15, 17, 18, 19], "idea": [0, 19], "someth": [0, 8], "should": [0, 1, 8, 9, 15, 16, 17, 18, 19], "includ": [0, 3, 5, 6, 8, 9, 10, 11, 14, 15, 16, 17, 19], "pleas": [0, 8, 14], "here": [0, 6, 8, 9, 13, 14, 17, 18, 19], "find": [0, 4, 8, 14, 16, 17], "typo": 0, "feel": [0, 16], "free": [0, 5, 6, 7, 19], "submit": [0, 7, 8, 10, 11, 14, 19], "modifi": [0, 15], "text": [0, 4, 9, 11, 15, 16, 19], "directli": 0, "Or": [0, 8, 17], "ar": [0, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 19], "less": [0, 14, 15], "comfort": [0, 4, 9], "want": [0, 4, 5, 6, 7, 9, 14, 15, 19], "see": [0, 6, 8, 9, 10, 12, 14, 15, 16, 17, 19], "larger": 0, "chang": [0, 11, 19], "content": [0, 7, 8, 14], "first": [0, 14], "most": [0, 3, 4, 6, 7, 19], "repositori": [0, 5, 8, 9, 10, 11, 14, 20], "sphinx": [0, 3, 4, 16, 17, 18], "engin": [0, 3], "built": [0, 7, 20], "us": [0, 3, 4, 5, 7, 8, 9, 11, 12, 13, 17, 18, 19], "theme": [0, 7], "myst": [0, 3, 6, 17], "syntax": [0, 3, 6, 17, 19], "creat": [0, 5, 6, 9, 11, 14, 16, 18, 19], "each": [0, 7, 8, 9, 15, 17], "page": [0, 3, 6, 7, 14, 15, 16, 18], "wish": [0, 5, 8, 11], "work": [0, 5, 11, 15, 19], "need": [0, 4, 5, 8, 11, 12, 15, 16, 17], "fork": 0, "clone": 0, "The": [0, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 19], "easiest": 0, "wai": [0, 3, 5, 14, 17], "nox": 0, "tool": [0, 4, 6, 7, 9, 13, 14, 15, 17, 19], "quickli": [0, 5, 14, 15, 16, 17], "environ": [0, 5, 11, 15], "run": [0, 5, 6, 11, 18], "command": [0, 16], "within": [0, 14, 16, 17], "them": [0, 8, 14, 16], "ensur": [0, 15, 16, 19], "ha": [0, 4, 11, 13, 14, 15, 17], "all": [0, 8, 12, 14, 15, 16, 17], "depend": [0, 8, 20], "To": [0, 13, 15, 16, 17], "do": [0, 5, 7, 14, 16, 17], "so": [0, 8, 14], "follow": [0, 7, 11, 12, 14, 16, 17], "step": [0, 16, 17], "instal": [0, 8, 17], "pip": 0, "": [0, 4, 5, 6, 9, 10, 11, 13, 15, 17, 18], "docs_build": 0, "folder": 0, "specifi": [0, 11, 14, 15, 16, 17], "noxfil": 0, "py": [0, 7, 15, 16], "configur": [0, 15], "output": [0, 15, 16], "_build": [0, 15], "html": [0, 4, 6, 15], "live": [0, 11, 15], "updat": [0, 8, 9, 11], "when": [0, 3, 7, 11, 12, 13, 14, 16, 17, 18, 19], "file": [0, 4, 5, 6, 7, 8, 11, 15, 16, 17], "docs_liv": 0, "thi": [1, 3, 6, 7, 9, 10, 11, 12, 14, 15, 16, 17, 18, 20], "section": [1, 3, 12, 15, 16, 17, 19, 20], "evolv": [1, 8], "publish": [1, 3, 14, 17, 20], "end": [1, 20], "spring": [1, 19], "2023": [1, 19, 20], "under": [2, 19, 20], "develop": [2, 7, 8, 10, 12, 13, 14, 17, 20], "common": [3, 6, 13, 14], "python": [3, 4, 14], "ecosystem": [3, 4, 6, 14, 16], "current": [3, 6, 7, 20], "howev": [3, 4, 5, 6, 7, 8, 15], "some": [3, 5, 7, 9, 11, 14, 15, 16, 17, 19], "maintain": [3, 5, 9, 11, 14, 16, 19], "like": [3, 7, 8, 10, 14, 15, 19], "mkdoc": [3, 6], "It": [3, 4, 7, 8, 9, 10, 11, 14, 15, 16, 17], "up": [3, 8, 11, 14, 16], "platform": [3, 12], "prefer": [3, 4, 6, 8, 15], "In": [3, 8, 12, 14, 15, 16, 20], "introduc": 3, "talk": [3, 15, 18], "about": [3, 4, 10, 15, 16, 17, 18, 19], "variou": 3, "option": [3, 4, 5, 7, 14], "can": [3, 4, 5, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19], "write": [3, 4, 6, 8, 14, 15], "rst": [3, 6, 15], "also": [3, 5, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19], "onlin": [3, 12, 13, 14], "might": [3, 4, 8, 9, 14, 16, 17, 18], "help": [3, 7, 8, 11, 14, 16, 17, 19], "optim": 3, "websit": [3, 4, 5, 6, 7, 8, 11, 13, 14, 17], "intro": [3, 12, 18], "doc": [3, 8, 14, 16, 18], "static": 3, "site": [3, 7, 14], "gener": [3, 7, 16, 17], "v": 3, "markdown": 3, "what": [3, 9, 12, 13, 15, 17, 18], "read": [3, 13, 14, 16, 17, 18], "github": [3, 4, 12, 13, 14, 15, 17, 19], "googl": [3, 16], "analyt": 3, "sitemap": 3, "search": 3, "sphinxext": 3, "opengraph": 3, "There": [4, 14, 15, 16], "three": [4, 19], "commonli": [4, 5, 8, 19], "easi": [4, 15, 17], "learn": [4, 19], "default": [4, 15], "jupyt": 4, "notebook": 4, "add": [4, 6, 7, 13, 14, 15, 16], "allow": [4, 5, 7, 11, 15, 16], "render": [4, 15], "limit": 4, "For": [4, 15, 16], "instanc": [4, 16], "refer": [4, 5, 16, 17], "color": 4, "call": [4, 10, 16], "out": [4, 11, 15], "block": 4, "other": [4, 5, 6, 8, 9, 12, 13, 14, 19], "custom": [4, 5], "element": [4, 7, 12, 15, 16, 18], "either": 4, "restructur": 4, "nativ": [4, 6], "support": [4, 5, 6, 7, 8, 15, 17, 19, 20], "wa": 4, "mani": [4, 5, 7, 9, 12, 15, 17], "year": 4, "recent": 4, "risen": 4, "top": [4, 14, 15], "favorit": 4, "given": [4, 17], "flexibl": 4, "combin": [4, 15], "vanilla": 4, "nice": [4, 11, 15], "becaus": [4, 16, 19], "offer": [4, 5, 7], "both": [4, 8, 12, 14, 15, 16, 17], "rich": 4, "function": [4, 6, 15, 17, 18, 19], "simpl": [4, 8, 14, 16, 17], "while": [4, 6, 7, 11], "chose": [4, 7, 12, 16], "ani": [4, 10, 11, 13, 17, 19], "list": [4, 7, 8, 13, 14, 15, 16, 17, 19], "abov": [4, 11, 12, 14, 16, 17], "suggest": [4, 5, 8, 16], "simpler": 4, "thu": [4, 13, 14, 16], "easier": [4, 6, 15, 16, 18, 19], "simplic": 4, "make": [4, 7, 11, 12, 15, 17, 18, 19], "more": [4, 5, 7, 8, 14, 16, 17, 19], "peopl": [4, 7, 8, 9, 17, 19], "contribut": [4, 8, 9, 11, 12, 17, 19], "corepythonpackag": 4, "readm": [4, 8, 10, 12, 17], "md": [4, 11, 12, 15, 17], "alreadi": 4, "format": [4, 5, 11, 15], "wide": [4, 16], "scientif": [4, 6, 14, 16, 19], "fenc": 4, "setup": [5, 11, 15], "host": [5, 8], "servic": 5, "two": [5, 15, 17], "below": [5, 8, 12, 14, 15, 16, 17, 19], "yourself": [5, 9], "anoth": [5, 12, 14, 15, 16], "project": [5, 13, 14, 17], "fulli": 5, "featur": [5, 11, 17], "its": [5, 8, 16, 17], "paid": 5, "tier": 5, "autom": 5, "build": [5, 8, 11, 14, 16, 18, 19, 20], "turn": 5, "integr": [5, 11, 19], "where": [5, 15, 17], "view": [5, 6, 8, 16], "progress": [5, 19], "success": 5, "failur": 5, "version": [5, 16, 19], "which": [5, 6, 9, 14, 19], "user": [5, 6, 9, 10, 11, 13, 14, 15, 16, 19], "older": 5, "tag": [5, 7], "thei": [5, 7, 8, 9, 11, 14, 15, 17], "download": [5, 15], "pdf": 5, "readthedoc": 5, "yaml": 5, "web": [5, 7], "local": [5, 11], "continu": [5, 11, 19], "push": 5, "branch": 5, "great": [5, 14], "deploy": 5, "bit": 5, "deploi": 5, "account": 5, "entir": [5, 7], "process": [5, 11, 19], "don": [5, 8, 14], "t": [5, 8, 14, 19], "On": 6, "discuss": [6, 8, 11, 13, 16, 17], "your": [6, 19, 20], "face": [6, 8, 16, 19], "explor": [6, 15], "gain": 6, "popular": [6, 7, 13], "exampl": [6, 9, 10, 12, 13, 14, 15, 17, 18], "love": 6, "geopanda": [6, 16, 17], "land": [6, 14, 15, 18], "verd": [6, 10, 16], "code": [6, 8, 10, 11, 12, 13, 15, 17, 18, 19], "our": [6, 8, 19], "A": [6, 8, 10, 11, 15, 16, 17, 19], "base": [6, 7, 8, 11, 15], "upon": 6, "set": [6, 7, 8, 11, 15, 19], "templat": 6, "serv": [6, 14], "mean": [6, 16], "modif": 6, "fly": 6, "written": [6, 17], "extend": 6, "few": [6, 14], "appli": [6, 13, 14, 16], "quick": [6, 14, 17], "beauti": 6, "automat": [6, 13, 19], "class": [6, 15, 16, 17, 18], "api": [6, 15, 17, 18], "from": [6, 7, 9, 11, 12, 13, 14, 15, 16, 17], "docstr": [6, 11, 17, 18], "autodoc": [6, 16, 18], "test": [6, 8, 11, 15, 16, 19], "doctest": [6, 18], "parser": 6, "whatev": 6, "pydata": [6, 7], "book": [6, 7], "furo": 6, "interest": [7, 10], "packag": [7, 13], "mai": [7, 9, 11, 15, 17], "core": [7, 16, 18], "extens": [7, 15, 16, 18], "compliant": 7, "european": 7, "data": [7, 8, 15], "protect": [7, 9], "regul": 7, "gdpr": 7, "compon": [7, 18], "one": [7, 10, 16], "let": [7, 14, 17], "know": [7, 8, 14], "collect": [7, 14], "consent": 7, "possibl": [7, 17], "infrastructur": [7, 8, 19], "around": [7, 9, 14], "close": [7, 12, 19], "slowli": 7, "shift": 7, "awai": 7, "open": [7, 13, 18], "plausibl": 7, "cloudflar": 7, "matomo": 7, "pyopensci": [7, 11, 13, 14], "look": [7, 12, 15, 19], "sourc": [7, 13, 18], "doe": [7, 15, 18], "sphinxcontrib": 7, "gtagj": 7, "try": [7, 14], "move": [7, 12, 14, 19], "complianc": 7, "privaci": 7, "still": [7, 8], "import": [7, 8, 9, 12, 14, 16], "And": [7, 15, 16, 17], "xml": 7, "index": [7, 15], "over": [7, 14], "time": [7, 11, 14, 15], "visibl": 7, "lightweight": 7, "requir": [7, 8, 11, 13, 19], "conf": [7, 15, 16], "url": 7, "metadata": 7, "protocol": 7, "provid": [7, 14, 15, 16, 17], "preview": 7, "share": [7, 13], "social": 7, "media": 7, "twitter": 7, "mastodon": 7, "even": [7, 16], "slack": 7, "discours": 7, "note": [8, 17], "those": [8, 15, 16, 17], "As": 8, "guid": [8, 10, 12, 13, 16, 17], "peer": [8, 19], "focus": [8, 15], "toctre": 8, "hidden": 8, "best": [8, 18, 19], "practic": [8, 18, 19], "licens": [8, 10, 12, 14, 19], "itself": [8, 9, 14], "qualiti": [8, 14, 16], "cours": 8, "valuabl": [8, 11], "how": [8, 9, 10, 11, 12, 13, 17, 18, 19], "get": [8, 13, 14, 15, 17, 19], "task": 8, "done": 8, "understand": [8, 16, 19], "workflow": [8, 11, 16, 17, 20], "won": 8, "further": [8, 16], "explicitli": 8, "target": 8, "who": [8, 17, 18], "new": [8, 11, 15, 19], "er": 8, "scienc": [8, 11], "expert": [8, 17], "programm": [8, 16, 17], "But": 8, "background": [8, 14], "softwar": [8, 13, 19], "These": [8, 9, 15, 19], "start": [8, 14, 15, 16, 17], "inform": [8, 10, 11, 19], "cite": [8, 14], "give": 8, "credit": 8, "research": 8, "applic": [8, 14], "oper": [8, 15, 16], "subset": 8, "experienc": 8, "engag": [8, 9], "abl": 8, "bug": [8, 9], "fix": [8, 9], "just": [8, 11], "spell": 8, "error": [8, 19], "tutori": [8, 16, 17, 18], "thing": [8, 10, 11, 14, 19], "d": [8, 10, 14, 19], "guidelin": [8, 10, 11, 12, 19], "clarifi": 8, "rememb": 8, "definit": 8, "broad": [8, 17], "could": 8, "report": 8, "cover": [8, 11, 15, 18, 19, 20], "edg": 8, "case": [8, 11, 15, 17, 19], "discov": 8, "structur": [8, 15, 19], "specif": [8, 11, 16, 17], "found": [8, 10, 17], "check": [8, 15, 16], "link": [8, 10, 11, 12, 15, 17], "consid": [8, 9, 11, 13, 14, 16, 17, 18, 19], "detail": [8, 17, 19], "walk": [8, 18], "through": [8, 13, 14, 18], "scipi": [9, 13], "notic": [9, 12, 15, 16, 17], "theirs": 9, "document": [9, 11, 13, 19], "fatiando": [9, 10], "locat": [9, 10, 14], "root": [9, 10, 13, 14], "onc": [9, 14], "question": [9, 10, 17], "encount": 9, "challeng": 9, "team": 9, "order": [9, 11, 16], "keep": [9, 12, 16, 17, 19], "healthi": 9, "mainatian": 9, "unhealthi": 9, "behavior": 9, "establish": 9, "expect": [9, 16], "term": [9, 13, 14, 17], "contributor": [9, 11, 14, 15, 19], "interact": 9, "rule": [9, 19], "enforc": 9, "harm": 9, "neg": 9, "own": 9, "encourag": [9, 19], "adopt": 9, "languag": [9, 14, 17], "coven": 9, "terra": 9, "geoscienc": 9, "pygmt": 10, "type": [10, 11, 15, 16, 17, 18], "happen": 10, "someon": [10, 14, 15, 17], "ask": [10, 14, 17], "place": [10, 19], "conduct": [10, 12], "ideal": [11, 14, 15, 17], "clearli": [11, 14], "show": [11, 12, 14, 15, 17], "technic": [11, 14, 17], "profici": 11, "suit": [11, 14, 15, 16, 19], "standard": [11, 19], "style": [11, 19], "approach": 11, "exist": [11, 19], "releas": 11, "onboard": 11, "inclin": 11, "thought": 11, "mainten": [11, 14, 15, 19], "futur": 11, "well": [11, 12, 14, 15, 16, 17, 19], "skip": 11, "especi": 11, "strongli": 11, "recommend": [11, 19], "elig": 11, "review": [11, 12, 13, 14, 19], "opt": 11, "mozilla": 11, "lab": 11, "outlin": [11, 12], "minimum": [12, 19], "contain": [12, 16, 19], "why": 12, "sure": [12, 14, 16], "mention": [12, 14], "etc": 12, "measur": [12, 14], "health": [12, 14], "evalu": [12, 14], "avail": [12, 14], "among": 12, "level": [12, 14, 15, 16, 17], "movingpanda": [12, 14], "repo": [12, 17], "screen": 12, "shot": 12, "taken": 12, "nov": 12, "23": 12, "2022": 12, "snyk": [12, 14], "known": [12, 16], "compani": 12, "tab": 12, "similar": [12, 14, 16], "screenshot": 12, "panda": [12, 14], "txt": 13, "approv": [13, 19], "initi": [13, 16], "osi": [13, 19], "handi": 13, "choos": 13, "copi": 13, "everi": [13, 16], "differ": [13, 18], "borrow": 13, "compli": 13, "select": 13, "would": 13, "bsd": 13, "mit": 13, "stackoverflow": 13, "stack": 13, "overflow": 13, "creativ": 13, "alik": 13, "sharealik": 13, "same": 13, "reus": 13, "violat": 13, "proce": 13, "caution": 13, "excel": 13, "worth": 13, "often": [14, 16], "befor": 14, "appear": 14, "pypi": [14, 20], "anaconda": [14, 20], "spend": 14, "front": [14, 20], "high": [14, 16, 17], "editor": 14, "chief": 14, "revis": 14, "begin": [14, 15], "meet": [14, 19], "criteria": [14, 19], "go": [14, 19], "checklist": 14, "explan": [14, 16, 19], "2": [14, 15, 16], "4": [14, 16, 17], "sentenc": [14, 16], "context": [14, 16], "fit": 14, "broader": [14, 17], "librari": [14, 17], "wrap": 14, "associ": [14, 19], "hint": 14, "wrapper": 14, "probabl": 14, "doesn": [14, 19], "ve": [14, 19], "bottom": [14, 15], "self": 14, "explanatori": 14, "better": [14, 19], "draw": 14, "attent": 14, "assur": [14, 16], "design": [14, 16], "properli": [14, 16], "ad": [14, 15, 16, 17, 18], "statu": 14, "fail": 14, "toward": 14, "brows": 14, "cloud": [14, 20], "pass": 14, "doi": 14, "accept": 14, "been": 14, "bewar": 14, "overus": 14, "too": [14, 19], "much": 14, "good": [14, 16, 18, 19], "overload": 14, "potenti": [14, 15], "At": 14, "1": [14, 15, 16], "3": [14, 16, 19], "state": [14, 17], "goal": [14, 17], "varieti": 14, "vari": 14, "complementari": 14, "school": [14, 17], "equival": 14, "appropri": 14, "maxim": 14, "access": [14, 17], "authent": 14, "token": 14, "complex": 14, "rather": [14, 15, 17], "than": 14, "complic": 14, "Of": 14, "avoid": 14, "sever": [14, 16, 17], "overwhelm": 14, "plenti": 14, "present": [14, 15], "direct": [14, 17], "advanc": 14, "final": 14, "bane": 14, "sullivan": 14, "art": 14, "kira": 14, "hackergrrl": 14, "finish": 15, "second": 15, "reproduc": 15, "construct": [15, 19], "act": 15, "via": 15, "thumbnail": 15, "plot": 15, "script": 15, "enjoi": 15, "mimic": 15, "ie": [15, 16], "ipynb": 15, "friendli": 15, "visual": 15, "grid": 15, "execut": 15, "per": 15, "downsid": 15, "finicki": 15, "particularli": 15, "matplotlib": 15, "name": [15, 17], "plot_": 15, "dai": 15, "slightli": [15, 16], "nuanc": 15, "successfulli": 15, "directori": 15, "plot_tutori": 15, "produc": 15, "build_exampl": 15, "plot_sampl": 15, "built_exampl": 15, "dir": 15, "sg_execution_tim": 15, "similarli": 15, "pro": 15, "con": 15, "By": [15, 16], "addit": [15, 16, 17, 19], "epilog": 15, "singl": [15, 16], "column": 15, "another_tutori": 15, "separ": [15, 16], "seri": 15, "onpythonpackag": 15, "stand": 16, "ppli": 16, "p": 16, "rogram": 16, "nterfac": 16, "add_numb": 16, "bunch": 16, "number": 16, "simpli": 16, "calcul": 16, "valu": 16, "return": 16, "6": [16, 19], "consist": 16, "attribut": [16, 17, 18], "interfac": 16, "describ": [16, 17], "input": 16, "usual": 16, "paramet": 16, "argument": 16, "print": 16, "effect": 16, "automag": [16, 18], "full": [16, 19], "clean": [16, 19], "along": 16, "brief": 16, "dig": 16, "down": 16, "click": 16, "descript": 16, "reason": 16, "explain": 16, "defin": [16, 17], "string": 16, "int": 16, "np": 16, "arrai": 16, "object": 16, "rest": 16, "simplifi": 16, "contrast": 16, "harder": 16, "scan": 16, "take": 16, "line": 16, "modul": 16, "napoleon": 16, "short": [16, 17], "longer": 16, "def": 16, "extent_to_json": 16, "ext_obj": 16, "convert": 16, "bound": 16, "shape": [16, 19], "geojson": 16, "spatial": [16, 17], "crop": 16, "raster": 16, "imag": 16, "geodatafram": 16, "extent": 16, "otherwis": 16, "minx": 16, "mini": 16, "maxx": 16, "maxi": 16, "extent_json": 16, "dictionari": 16, "corner": 16, "coordin": 16, "repres": 16, "gpd": 16, "earthpi": 16, "e": [16, 19], "io": 16, "path_to_exampl": 16, "load": 16, "shapefil": 16, "rmnp": 16, "read_fil": 16, "shp": 16, "convers": 16, "polygon": 16, "105": 16, "4935937": 16, "40": 16, "1580827": 16, "correct": 16, "mind": [16, 17], "neither": 16, "item": 16, "replac": 16, "alon": 16, "across": 16, "system": 16, "add_m": 16, "anum": 16, "anum2": 16, "integ": 16, "print_m": 16, "break": 17, "broadli": 17, "method": [17, 18], "granular": 17, "greater": 17, "navig": 17, "highli": 17, "audienc": 17, "whenev": 17, "jargon": 17, "instruct": 17, "reader": 17, "vignett": 17, "small": 17, "involv": 17, "part": 17, "store": 17, "card": 17, "popul": 18, "galleri": 18, "four": 18, "relat": 18, "curat": 19, "surround": 19, "come": 19, "assum": 19, "guidanc": 19, "friend": 19, "right": 19, "enough": 19, "being": 19, "bar": 19, "higher": 19, "hope": 19, "usabl": 19, "ultim": 19, "beyond": 19, "now": 19, "invit": 19, "mayb": 19, "ci": 19, "cooki": 19, "cutter": 19, "situat": 19, "yet": 19, "soon": 19, "must": 19, "major": 19, "alwai": 19, "explicit": 19, "compat": 19, "old": 19, "difficult": 19, "thumb": 19, "least": 19, "latest": 19, "g": 19, "8": 19, "7": 19, "author": 19, "consult": 19, "pep": 19, "http": 19, "www": 19, "org": 19, "dev": 19, "0008": 19, "lint": 19, "linter": 19, "flake8": 19, "manag": 20, "stai": 20, "tune": 20, "januari": 20}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"contribut": [0, 10, 14], "guid": [0, 11, 14, 19], "python": [0, 5, 6, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20], "open": [0, 8, 9, 10, 17, 19], "sourc": [0, 8, 9, 10, 17, 19], "softwar": 0, "packag": [0, 5, 6, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20], "book": 0, "how": [0, 5, 14, 16], "thi": [0, 8, 19], "structur": [0, 2], "instruct": [0, 14], "build": [0, 3, 6, 15], "document": [0, 3, 4, 5, 6, 7, 8, 12, 14, 15, 16, 17, 18], "local": 0, "your": [0, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "comput": 0, "ci": 1, "test": [1, 14], "come": [1, 20], "soon": [1, 20], "code": [2, 9, 14, 16], "style": [2, 16], "tool": [3, 8, 20], "host": 3, "outlin": [3, 13], "syntax": 4, "markdown": 4, "v": [4, 5], "myst": 4, "rst": 4, "creat": [4, 15, 17], "doc": [4, 5, 15], "publish": 5, "onlin": 5, "what": [5, 8, 10, 11, 14, 16, 19], "i": [5, 8, 11, 16, 19], "read": 5, "github": 5, "page": [5, 17], "us": [6, 14, 15, 16], "sphinx": [6, 7, 15], "static": 6, "site": 6, "gener": 6, "can": 6, "custom": 6, "extens": 6, "theme": 6, "commonli": 6, "optim": 7, "so": 7, "search": 7, "engin": 7, "other": 7, "user": [7, 8, 17, 18], "find": [7, 19], "googl": 7, "analyt": 7, "sitemap": 7, "sphinxext": 7, "opengraph": 7, "critic": 8, "": [8, 14, 16], "success": 8, "two": 8, "type": 8, "1": 8, "basic": 8, "2": 8, "potenti": 8, "contributor": 8, "element": [8, 17], "pyopensci": [8, 19], "look": 8, "review": 8, "next": 8, "section": [8, 14, 18], "The": 9, "code_of_conduct": 9, "md": [9, 10, 13, 14], "file": [9, 10, 12, 13, 14], "In": 9, "why": [9, 11, 16], "you": [9, 13, 15, 19], "need": 9, "conduct": [9, 14], "should": [10, 11, 12, 13, 14], "contain": [10, 11, 14], "develop": [11, 19], "import": [11, 13], "That": 12, "repositori": [12, 13], "have": 13, "licens": 13, "make": 13, "sure": 13, "close": 13, "follow": 13, "guidelin": [13, 14], "chose": 13, "readm": 14, "resourc": 14, "name": 14, "badg": 14, "current": 14, "version": 14, "continu": 14, "integr": 14, "coverag": 14, "A": 14, "short": 14, "easi": 14, "understand": 14, "descript": 14, "doe": [14, 16], "instal": 14, "ani": 14, "addit": 14, "setup": 14, "requir": 14, "brief": 14, "demonstr": 14, "link": 14, "tutori": [14, 15], "commun": 14, "citat": 14, "inform": 14, "run": [15, 16], "when": 15, "galleri": 15, "benefit": 15, "challeng": 15, "nbsphinx": 15, "jupyt": 15, "notebook": 15, "api": 16, "docstr": 16, "an": 16, "relat": 16, "three": 16, "format": 16, "we": 16, "like": 16, "numpi": 16, "exampl": 16, "better": 16, "best": 16, "function": 16, "doctest": 16, "method": 16, "face": [17, 18], "core": 17, "compon": 17, "write": [17, 18], "usabl": 17, "four": 17, "good": 17, "land": 17, "welcom": 19, "enthusiast": 19, "who": 19, "guidebook": 19, "where": 19, "head": 19}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 57}, "alltitles": {"Contributing Guide for the Python open source software packaging book": [[0, "contributing-guide-for-the-python-open-source-software-packaging-book"]], "How this guide structured": [[0, "how-this-guide-structured"]], "Instructions for building the documentation locally on your computer": [[0, "instructions-for-building-the-documentation-locally-on-your-computer"]], "CI and Testing - Coming Soon!": [[1, "ci-and-testing-coming-soon"]], "Code style and structure": [[2, "code-style-and-structure"]], "Tools to Build and Host your Documentation": [[3, "tools-to-build-and-host-your-documentation"]], "Documentation build tools outline": [[3, "documentation-build-tools-outline"]], "Documentation syntax: markdown vs. myST vs. rst syntax to create your docs": [[4, "documentation-syntax-markdown-vs-myst-vs-rst-syntax-to-create-your-docs"]], "How to publish your Python package documentation online": [[5, "how-to-publish-your-python-package-documentation-online"]], "What is Read the Docs ?": [[5, "what-is-read-the-docs"]], "What is GitHub Pages?": [[5, "what-is-github-pages"]], "Read the Docs vs GitHub Pages": [[5, "read-the-docs-vs-github-pages"]], "Using Sphinx to Build Python Package Documentation": [[6, "using-sphinx-to-build-python-package-documentation"]], "Sphinx - a static site generator": [[6, "sphinx-a-static-site-generator"]], "Sphinx sites can be customized using extensions and themes": [[6, "sphinx-sites-can-be-customized-using-extensions-and-themes"]], "Commonly used Sphinx themes": [[6, "commonly-used-sphinx-themes"]], "Optimizing your documentation so search engines (and other users) find it": [[7, "optimizing-your-documentation-so-search-engines-and-other-users-find-it"]], "Google Analytics": [[7, "google-analytics"]], "sphinx-sitemap for search engine optimization": [[7, "sphinx-sitemap-for-search-engine-optimization"]], "sphinxext.opengraph": [[7, "sphinxext-opengraph"]], "Documentation for your Open Source Python Package": [[8, "documentation-for-your-open-source-python-package"]], "Documentation is critical for your Python package\u2019s success": [[8, "documentation-is-critical-for-your-python-package-s-success"]], "Two types of Python package users": [[8, "two-types-of-python-package-users"]], "1. Basic Tool Users": [[8, "basic-tool-users"]], "2. Potential tool contributors": [[8, "potential-tool-contributors"]], "Documentation elements that pyOpenSci looks for reviewing a Python package": [[8, "documentation-elements-that-pyopensci-looks-for-reviewing-a-python-package"]], "What\u2019s next in this Python package documentation section?": [[8, "what-s-next-in-this-python-package-documentation-section"]], "The CODE_OF_CONDUCT.md file In Your Python Open Source Package": [[9, "the-code-of-conduct-md-file-in-your-python-open-source-package"]], "Why you need a code of conduct": [[9, "why-you-need-a-code-of-conduct"]], "Contributing File in your Python Open Source Package": [[10, "contributing-file-in-your-python-open-source-package"]], "What a CONTRIBUTING.md file should contain": [[10, "what-a-contributing-md-file-should-contain"]], "What the development guide for your Python package should contain": [[11, "what-the-development-guide-for-your-python-package-should-contain"]], "Why a development guide is important": [[11, "why-a-development-guide-is-important"]], "Documentation Files That Should be in your Python Package Repository": [[12, "documentation-files-that-should-be-in-your-python-package-repository"]], "Your repository should have a LICENSE.md file": [[13, "your-repository-should-have-a-license-md-file"]], "Important: make sure that you closely follow the guidelines outlines by the License that you chose": [[13, "important-make-sure-that-you-closely-follow-the-guidelines-outlines-by-the-license-that-you-chose"]], "README File Guidelines and Resources": [[14, "readme-file-guidelines-and-resources"]], "What your README.md file should contain": [[14, "what-your-readme-md-file-should-contain"]], "\u2714\ufe0f Your package\u2019s name": [[14, "your-package-s-name"]], "\u2714\ufe0f Badges for current package version, continuous integration and test coverage": [[14, "badges-for-current-package-version-continuous-integration-and-test-coverage"]], "\u2714\ufe0f A short, easy-to-understand description of what your package does": [[14, "a-short-easy-to-understand-description-of-what-your-package-does"]], "\u2714\ufe0f Installation instructions": [[14, "installation-instructions"]], "\u2714\ufe0f Document any addition setup required": [[14, "document-any-addition-setup-required"]], "\u2714\ufe0f Brief demonstration of how to use the package": [[14, "brief-demonstration-of-how-to-use-the-package"]], "\u2714\ufe0f Descriptive links to package documentation, short tutorials": [[14, "descriptive-links-to-package-documentation-short-tutorials"]], "\u2714\ufe0f A Community Section with Links to Contributing Guide, Code of Conduct": [[14, "a-community-section-with-links-to-contributing-guide-code-of-conduct"]], "\u2714\ufe0f Citation information": [[14, "citation-information"]], "Create tutorials in your Python package documentation": [[15, "create-tutorials-in-your-python-package-documentation"]], "Create Python package tutorials that run when you build your docs": [[15, "create-python-package-tutorials-that-run-when-you-build-your-docs"]], "sphinx gallery:": [[15, "sphinx-gallery"]], "Sphinx Gallery benefits": [[15, "sphinx-gallery-benefits"]], "Sphinx gallery challenges": [[15, "sphinx-gallery-challenges"]], "nbsphinx - tutorials using Jupyter Notebooks": [[15, "nbsphinx-tutorials-using-jupyter-notebooks"]], "Document the code in your package\u2019s API using docstrings": [[16, "document-the-code-in-your-package-s-api-using-docstrings"]], "What is an API?": [[16, "what-is-an-api"]], "What is a docstring and how does it relate to documentation?": [[16, "what-is-a-docstring-and-how-does-it-relate-to-documentation"]], "Python package API documentation": [[16, "python-package-api-documentation"]], "Three Python docstring formats and why we like NumPy style": [[16, "three-python-docstring-formats-and-why-we-like-numpy-style"]], "Docstring examples Better and Best": [[16, "docstring-examples-better-and-best"]], "Best: a docstring with example use of the function": [[16, "best-a-docstring-with-example-use-of-the-function"]], "Using doctest to run docstring examples in your package\u2019s methods and functions": [[16, "using-doctest-to-run-docstring-examples-in-your-package-s-methods-and-functions"]], "Create User Facing Documentation for your Python Package": [[17, "create-user-facing-documentation-for-your-python-package"]], "Core components of user-facing Python package documentation": [[17, "core-components-of-user-facing-python-package-documentation"]], "Write usable documentation": [[17, "write-usable-documentation"]], "Four elements of a good open source documentation landing page": [[17, "four-elements-of-a-good-open-source-documentation-landing-page"]], "Writing user-facing documentation for your Python package": [[18, "writing-user-facing-documentation-for-your-python-package"]], "User-facing documentation sections": [[18, "user-facing-documentation-sections"]], "pyOpenSci Python Open Source Package Development Guide": [[19, "pyopensci-python-open-source-package-development-guide"]], "Welcome, Python open source enthusiast!": [[19, "welcome-python-open-source-enthusiast"]], "Who this guidebook is for": [[19, "who-this-guidebook-is-for"]], "What you will find in this guidebook": [[19, "what-you-will-find-in-this-guidebook"]], "Where this guide is headed": [[19, "where-this-guide-is-headed"]], "Python Packaging Tools\u2026 Coming soon\u2026": [[20, "python-packaging-tools-coming-soon"]]}, "indexentries": {}})