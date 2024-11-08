# How it works

## The heart of DEVLENS

Thanks to ANTLR4 parsers, we create **AST**s that give enough informations to find which nods hold informations we want. The main purpose of this logic is to modulate **DEVLENS** to accept any language as input. Annotators are not created on reference of file but directly on syntax trees.



## Abstract Syntax Tree (AST)

An Abstract Syntax Tree (**AST**) is a tree representation of the syntactic structure of source code. Each node represents a construct occurring in the code, such as expressions or statements, allowing for structured analysis and manipulation of the code.

For example, this block represent the tree of a Python import."Import_Stmt" is the first node that interest us to filter every import in code. Then value of the import is located under the "Dotted_name" node :

![AST1](/../static/img/howitwork/ast.png?raw=true "AST1")


### Generate an AST

To generate an **AST** through our interactive terminal you can directly choose the correct option, and specify the folder you want to analyze :

![AST-generate](/../static/img/howitwork/ast-generate.png?raw=true "AST-generate")

**DEVLENS** will analyze every file you have in the folder, create an **AST** and store it in a file at the root of where you executed the binary :

![ast-file](/../static/img/howitwork/file.png?raw=true "ast-file")

Accessing this file will give you a general view of every node of your project, sorted by file.

![AST2](/../static/img/howitwork/ast2.png?raw=true "AST2")


## Annotation

The next step is to "catch" the node you want. Binaries in the release comes with an 'annotators/' folder already filled with some example.

Here is an example of the Annotator that will store every import of your project :
```python 
class PythonImportAnnotator(AbstractAnnotator):
    """
    PythonImportAnnotator is an annotator class that identifies import statements in Python code.
    """
    def parse(self, ast: ParserRuleContext):
    """
       Methods:
    --------
    parse(ast: ParserRuleContext):
        Parses the provided AST to find and yield annotations for Python import statements.
        It searches for import statements, import names, and dotted names within the AST.

        Parameters:
        -----------
        ast : ParserRuleContext
            The abstract syntax tree to be parsed for import statements.

        Yields:
        -------
        Annotation
            An annotation object containing the name "Import", the value of the import statement,
            and the context in which the import statement was found.
    """
        importStmts = findAll(ast, "Import_stmt")
        importNames = findAll(importStmts, "Import_name")
        names = findAll(importNames, "Dotted_name")

        for match in names:
            yield Annotation(name="Import", value=self.getText(match), context=match)
```

What interest us in this example is mostly the use of `findAll()` method. This method will create a list of every node you want in the AST.

You just have to use the `findAll()` on each node you want to filter until you get the value of the node.

The last part is to create an Annotation for each match you have. You can choose to not store a value in the Annotation by passing `None` to the annotation.

Executing a `checkf` or a `checkd` will result on the creation of Annotations and the filling of the database.

![SQLite Annotation](/../static/img/howitwork/db.png?raw=true "SQLite Annotation")