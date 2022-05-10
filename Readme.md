
# Elevator.js

Elevator.js is a javascript library to develop php single page/without reload web application more easily. you don't need to use node js environment and import package etc. To use that just you need to link by <script> tag in your project.
Check the documentation for understand. You can use this library in completely free.

For any issue You can directly contact with developer: [Rezwan Ahmod Sami](https://facebook.com/rezwanahmodsami)



# Introduction

Research projects produce experiments, data, analyses, manuscripts,
posters, slides, stimuli and materials, computational models, and more.
However, the potential added value of these products is not fully
realized due to limited sharing and curating practices. Although more
transparent communication of these research products has recently been
encouraged (Houtkoop et al. 2018; Lindsay 2017; Vanpaemel et al. 2015;
Wicherts et al. 2006; Klein et al. 2018; Martone, Garcia-Castro, and
VandenBos 2018; Rouder, Haaf, and Snyder 2019; Rouder 2016), these
efforts often focus narrowly on sharing data (and sometimes analysis
code). Further, the practical value of sharing is often limited by poor
documentation, incompatible file formats, and lack of organization,
resulting in low rates of reproducibility (Hardwicke et al. 2018).
Standardization of protocols for sharing would be beneficial; but, such
standards have not yet emerged. Instead of developing another standard,
we suggest borrowing existing standards and practices from software
engineering. Specifically, the R package standard, with additional R
authoring tools, provides a robust framework for organizing and sharing
reproducible research products.

Some advances in data-sharing standards have emerged: In much of
psychological science it is now customary to share data on Open Science
Framework (OSF). However, those materials often contain idiosyncratic
file organization and minimal or missing documentation for raw data. In
specific areas, organization and documentation standards have emerged,
(e.g., the BIDS framework in neuroscience, Gorgolewski et al. 2016), but
they usually only consider data and code instead of the project as a
whole. More comprehensive proposals are described in the Transparency
and Openness Promotion (Nosek et al. 2015), and Peer Reviewers’ Openness
initiative guidelines (Morey et al. 2016), but these fall short of
describing detailed standards for organization and metadata.

We sought for a standard for organizing and sharing that would adhere to
the FAIR (Findable, Accessible, Interoperable, Reusable) guidelines to
maximize the reuse potential of data and support “discovery through good
data management” (Wilkinson et al. 2016). Additionally, we recognized
the added value of including other research outputs (“products”; e.g.,
manuscripts) beyond datasets in a reproducible collection of materials
that is openly available on the internet for transparency and ease of
access. We identified the R package standard with modern online-based
workflows as a solution that doesn’t present overwhelming overhead for
already busy researchers. Here, we present a tutorial on creating R
packages for sharing research products, such as data, functions, and
analysis code embedded in narrative documents.

# R Package tutorial

The outline of this tutorial is as follows:

1.  Create a new R package with R Studio
      - Set up the fundamental package infrastructure
2.  Describe the package
      - Edit DESCRIPTION and readme files
3.  Add data to package
      - Add raw data, preprocessing scripts, and an R data object
4.  Create and add functions
      - Create and document functions
      - Dependencies
5.  Document the package
      - Describe the package, its functions, and data, in a machine- and
        human-readable format

After these steps, you will have a functional R package on your
computer. Then, we will talk about sharing and showcasing your package
online.

  - Sharing the package
      - Upload to GitHub to make your package (and its source code)
        available
      - Connect to Open Science Framework
  - Create a website for the package
      - Showcase your R package online with a website
  - Add narrative documents
      - Describe how to use your data and functions (e.g. manuscripts,
        supplementary analysis files)

## Create a package with R Studio

First, use R Studio to create a new R Project. Click “File” -\> “New
Project…” -\> “New Directory” -\> “R Package”. This brings up a menu
where you give your package a name, and specify where to create it on
your hard drive. To enable Git (Vuorre and Curley 2018), make sure that
the “Create a git repository” box is checked (see below). In this
tutorial, we create an R package called exampleRPackage; if you want to
follow the tutorial exactly, choose that name for your package.

After you click “Create project”, the project’s files and folders look
like this:

``` bash
.
├── .gitignore
├── .Rbuildignore
├── DESCRIPTION
├── NAMESPACE
├── R
│   └── hello.R
├── exampleRPackage.Rproj
└── man
    └── hello.Rd
```

`.gitignore` and `.Rbuildignore` are hidden files, and specify which
files should be ignored by Git (Vuorre and Curley 2018), and R package
building operations, respectively. You can ignore them for now.
`DESCRIPTION` is a file describing the package, and `NAMESPACE` its
functions. `R/` is the folder for scripts that contain R functions.
`exampleRPackage.Rproj` identifies the folder as an R package project.
`man/` is the “manuals” folder which will have files documenting the
package’s functions.

The package is already functional, but it contains nothing useful: Next,
we introduce and edit the content to create a complete package that
contains data and functions.

## Describe the package

The `DESCRIPTION` file describes the package in a standard,
machine-readable format. This file is automatically created with example
content by R Studio. However, you need to edit the file to reflect the
details of your package, making sure you don’t change the formatting:
This file is read by the R package creating process, and the file must
therefore remain machine-readable. Here’s an example:

``` bash
Package: exampleRPackage
Type: Package
Title: An example R package
Version: 0.1.0
Authors@R: person("Matti", "Vuorre", email = "mv2521@columbia.edu",
                  role = c("aut", "cre"))
Description: This package is an example R package.
Encoding: UTF-8
LazyData: true
Depends: 
    R (>= 3.1)
Imports:
    stringr
```

This file serves two important purposes. First, it describes your
package (`Title`, `Version` number, `Authors`, and `Description`). The
`Authors@R` field contains person information in R syntax (see
`?person`), and can include multiple persons by wrapping them in `c()`.
(`Encoding` and `Lazydata` field can be ignored, for our purposes.)
Second, it specifies your package’s dependencies (`Depends`, `Imports`,
and `Suggests` \[the latter is not included in this example\]).

There are important differences between the three fields for specifying
your package’s dependencies. First, you should rarely, if ever, use
`Depends`, except for specifying a version of R that your package
requires. `Imports` is the most common field for listing the R packages
that your package requires: Packages listed in `Imports` are installed
when your package is installed. When you write functions (see below) in
your package, you can use the other package’s functions with the `::`
operator (e.g. `stringr::to_title_case()`).

For more information about DESCRIPTION, and describing your package, see
<http://r-pkgs.had.co.nz/description.html>.

### Readme

Although not part of the R package standard, we recommend creating a
readme file that gives additional narrative description about your
package. We recommend writing the file in Markdown or R Markdown
(Allaire et al. 2016). To create the R Markdown file, use the following
function from the usethis package:

``` r
library(usethis)
use_readme_rmd()
```

This function created the file, and also printed a message indicating
that the file has been added to the “.Rbuildignore” file. Make changes
to `README.Rmd` with R Studio’s text editor. When you are done, click
Knit in R Studio, which produces a Markdown file that displays nicely
when the package is hosted online (see below). (If your README.Rmd uses
your package, you cannot Knit it before clicking “Install and Restart”
in R Studio’s build tab.)

Now that we have described the package, let’s add some data to it.

## Add data

The purposes of saving data in an R package are that the resulting data
will be easily available, and described and organized in a standard,
machine-readable format. Further, if your package’s source code is under
version control (Vuorre and Curley 2018), the data will be versioned as
well.

Broadly, there are 3 steps to including data in an R package: 1. Placing
raw data in the “data-raw” directory, 2. creating an R script that
processes the raw data and creates an R data object into the “data”
directory, and 3. documenting the final data object.

First, we will add the raw data to a `data-raw/` directory. We use a
convenience function from the usethis package to create that folder,
which will also add the folder into the `.Rbuildignore` file, ensuring
that the R package build process will ignore it.

``` r
use_data_raw()
```

Then, I moved an example data file (a small simulated dataset) to the
“data-raw” directory, and created a
[“preprocess.R”](https://github.com/mvuorre/exampleRPackage/blob/master/data-raw/preprocess.R)
file in the same directory. Usually, that file would contain the code
for pre-processing the data, but for this example that is not needed.
That example preprocessing file simply reads in the data file, and runs
the following command:

``` r
use_data(exampleData)
```

The above command takes the `exampleData` object from the R environment
(created in the
[script](https://github.com/mvuorre/exampleRPackage/blob/master/data-raw/preprocess.R))
and saves the R data object into `data/`. As a result, your R package
now includes a data set called `exampleData`.

Finally, the resulting R data object should be documented in a standard
format by placing a `data.R` file in the “R” directory. To document your
data set, create a file called `data.R` in the `R` directory. Then, use
[roxygen2](https://roxygen2.r-lib.org/) (Wickham, Danenberg, and Eugster
2017) documentation syntax to write your data object’s documentation in
the `R/data.R` file. It should look similar to the following for our
`exampleData` object:

    #' @title Scores of Group A and Group B
    #'
    #' @description A data set with the scores of two groups.
    #'
    #' @format A data frame with 60 rows and 2 variables:
    #' \describe{
    #'   \item{group}{Participant's group, A or B.}
    #'   \item{score}{The participant's score in hypothetical task.}
    #' }
    #' @source <https://www.github.com/mvuorre/exampleRPackage>
    "exampleData"

The key features of this documentation file are (from top to bottom in
the above code listing):

Each line begins with a `#'` to indicate roxygen2 syntax. First, your
data set should have a title (`@title`). The `@description` field is an
optional but highly recommended longer description of the data. For
example, what were the collection procedures, who were the respondents,
etc. The `@format` field describes the object (e.g. an R data.frame),
its dimensions, and then describes all the variables (e.g. `group` and
`score`). The `@source` field includes the source of the data, which
could be a citation to an academic article, or a website, for example.
Finally, the last line should be the name of the data object in
quotation marks. You can document multiple data files in the same
`R/data.R` file; simply leave one blank line between them.

For more details on creating, documenting, and including data sets in R
packages, see <http://r-pkgs.had.co.nz/data.html>.

## Create functions

Functions in R packages are portable, such that others can install the
package from their R console, load it, and start using the functions
immediately. Packages can also depend on other packages (and be depended
on), such that R automatically installs any requirements for your
functions to work appropriately. Functions within R packages are
documented in a standardized manner, and the documentation for a
function can be viewed in R (e.g. try `?mean`) or online.

Learning and following R conventions for declaring functions has a
pedagogical benefit to the researcher and may improve their practices.
There is also a reuse benefit: Functions can be difficult to find in old
scripts, but easy to find and load if they are called from an existing
package. Thus, formally including one’s functions in R packages
facilitates reproducibility and sharing.

To include functions in your package, place the functions’ scripts in
files in the “R” directory. When you first created your package, that
directory was created with an example `hello.R` script. Open that file
in R Studio’s text editor, and delete all the text above the function.
Then, in the R Studio menu, click “Code” -\> “Insert Roxygen Skeleton”.
That creates template documentation into the function’s file, which you
can then manually fill to describe your function. `exampleRPackage`
includes an example function, whose source looks like this:

    #' Personal greeting
    #'
    #' @description Greet a person and appropriately capitalize their name.
    #'
    #' @param name Your name (character string; e.g. "john doe").
    #'
    #' @return A character string, capitalized to title case.
    #' @export
    #'
    #' @examples
    #' hello("james bond")
    hello <- function(name = "your name") {
        name <- stringr::str_to_title(name)
        print(paste("Hello,", name))
    }

This function, as was the data set above, is documented with
[roxygen2](https://roxygen2.r-lib.org/index.html) syntax. Many of the
fields are similar from the above section on data documentation. Here,
we also have `@param` fields, these describe what the function’s
arguments are. The `@return` field describes what the function will
return. `@export` indicates that the function should be exported from
your package; that is, made available when you attach the package with
`library()`. There is also an `@examples` field that can include
executable examples of how to use your function. Below the function’s
description is the actual code.

For more information on writing functions in R packages, see
<http://r-pkgs.had.co.nz/r.html>.

## Finish documentation and build package

We are almost ready with the minimal example package. The only remaining
steps are to finish documenting the package, and then to build and
install it on your computer.

Your package is now documented in the DESCRIPTION file, and the
functions and data are documented in their respective files in the R/
directory. The data and functions were documented with
[roxygen2](https://roxygen2.r-lib.org/) syntax, which must subsequently
be translated into R’s documentation files in the man/ directory, and
their dependencies must be listed in the NAMESPACE file.

Fortunately, you don’t need to do that manually. First, ensure that R
Studio generates documentation with roxygen. Go to Tools -\> Project
Options… -\> Build Tools, and ensure that “Generate documentation with
roxygen” is checked, and that “Automatically run roxygen when running
install and restart” is checked in the subsequent “Configure” menu.
Then, delete the two files, man/hello.Rd and NAMESPACE, which R Studio
created automatically when you started your package. Finally, in R
Studio’s “Build” tab, click “Install and Restart”.

Doing so automatically writes the documentation in man/, and the
appropriate dependencies and your package’s exported functions into the
NAMESPACE file, which you subsequently never need to (or should) edit
manually. After this, whenever you have edited your documentation,
clicking “Install and Restart” will update the documentation files. To
read more about documenting your data and functions, please visit
<http://r-pkgs.had.co.nz/man.html>.

Having clicked “Install and Restart” you have also, rather obviously,
installed your package and restarted R. If, following this tutorial, you
created the `hello()` function and `exampleData` data sets, they are now
available to you when the package is attached:

``` r
library(exampleRPackage)
hello("my name")
#> [1] "Hello, My Name"
head(exampleData)
#>   group     score
#> 1     a  97.18260
#> 2     a  86.87440
#> 3     a 107.95184
#> 4     a 102.70070
#> 5     a  97.22694
#> 6     a  94.33976
```

And you can view their help pages by prepending their names with a
question mark:

``` r
?hello
?exampleData
```

# Advanced (optional) steps

## Sharing the R package

### GitHub

The easiest way to share the package is to create the R package as a Git
repository and share it on GitHub (Vuorre and Curley (2018);
<https://happygitwithr.com/>; <http://r-pkgs.had.co.nz/git.html>). If
you followed the tutorial above, Git is already initialized in the
package’s repository. After connecting the local Git repository to
GitHub, you can use R Studio’s Git panel to stage, commit, push, and
pull changes. Once the package’s source code is pushed to GitHub, others
can install the package. For example, you can install the example
package created in this tutorial:

``` r
devtools::install_github("mvuorre/exampleRPackage")
```

The above command, when executed in R, downloads and installs the
`exampleRPackage` from GitHub user `mvuorre`. You can view this example
R package’s source code on GitHub:
<https://github.com/mvuorre/exampleRPackage>.

### Open Science Framework

If you have connected the package’s GitHub repository to an OSF project,
you can also install the package from OSF, as done below for this
example package:

``` r
temporary_file <- tempfile(fileext = ".tar.gz")
download.file("https://osf.io/mqd6f/download", destfile = temporary_file)
install.packages(temporary_file, repos = NULL)
```

## Creating a website for the R package

Once the package’s source code is hosted on GitHub, you can showcase its
contents as a website. For example, you can view exampleRPackage’s
website at <https://mvuorre.github.io/exampleRPackage/>. To create
websites from your packages, you need the
[pkgdown](https://pkgdown.r-lib.org) R package (Wickham 2017). After
installing that package, set up the required files for the website:

``` r
use_pkgdown()
```

Then, To create the website, run:

``` r
library(pkgdown)
build_site()
```

The website is now available at `docs/index.html`. You can open it and
view it locally. However, you will certainly want to upload the website
somewhere so that others can access it as well. The easiest option is to
host it on GitHub.

Here, we assume that you have created the package in a local Git
repository and have pushed the repository to GitHub. Push all the
current changes to GitHub, and then go to the package’s GitHub website,
click “Settings”, and scroll down to “GitHub Pages”. There, click on the
“Source” pull-down menu that currently says “None”, and choose the
“master branch /docs folder”. Save the changes. After a little while,
the page will be visible at <https://username.github.io/packagename>.
For example, `exampleRPackage`’s website is at
<https://mvuorre.github.io/exampleRPackage>.

There are many options for customizing the website; see
<https://pkgdown.r-lib.org>.

## Other content

Up to this point, our package has contained only code and data. However,
typical research products make use of those to create narrative
documents. R packages can contain vignettes, which show example uses of
the package’s data and functions, and are distributed with the package.
However, many more kinds of narrative documents can be shared along the
R package’s source code, and included on the website, such as manuscript
PDFs created with R Markdown.

Here, we create an article that shows an example analysis of the dataset
contained in our exampleRPackage. When completed, the document will
render as a subpage of the package’s website (see above).

``` r
usethis::use_article("Example-Analysis")
```

Then, after editing the contents of that file, re-run `build_site()`,
and the document will be rendered as a webpage on the package’s website.

The content we just added resulted in a website, but you could also
include PDF manuscripts whose source code is R Markdown, or many other
kinds of documents. For details, see the
[pkgdown](https://hadley.github.io/pkgdown/) and [R
Markdown](https://rmarkdown.rstudio.com/) websites.

# Further Reading

## Online Resources

  - <http://r-pkgs.had.co.nz/>: Website of Hadley Wickham’s R Packages
    book (Wickham 2015).
  - [Writing an R package from
    scratch](https://hilaryparker.com/2014/04/29/writing-an-r-package-from-scratch/):
    A short and good blog post on how to create minimal R packages
  - [Writing R
    Extensions](https://cran.r-project.org/doc/manuals/r-release/R-exts.html):
    The official R documentation on writing R packages. This is the
    complete and definitive set of instructions on how to write R
    packages. It is almost unreadable in it’s comprehensiveness, and
    unnecessary for small R packages.
  - <https://happygitwithr.com/>: A guide for using Git with R and R
    Studio

## References

<div id="refs" class="references">

<div id="ref-allaire_rmarkdown:_2016">

Allaire, J. J., Joe Cheng, Yihui Xie, Jonathan McPherson, Winston Chang,
Jeff Allen, Hadley Wickham, and Rob Hyndman. 2016. *Rmarkdown: Dynamic
Documents for R* (version 1.3).
<https://cran.r-project.org/web/packages/rmarkdown/index.html>.

</div>

<div id="ref-gorgolewski_brain_2016">

Gorgolewski, Krzysztof J., Tibor Auer, Vince D. Calhoun, R. Cameron
Craddock, Samir Das, Eugene P. Duff, Guillaume Flandin, et al. 2016.
“The Brain Imaging Data Structure, a Format for Organizing and
Describing Outputs of Neuroimaging Experiments.” *Scientific Data* 3
(June): 160044. <https://doi.org/10.1038/sdata.2016.44>.

</div>

<div id="ref-HardwickeDataavailabilityreusability2018">

Hardwicke, Tom E., Maya B. Mathur, Kyle MacDonald, Gustav Nilsonne,
George C. Banks, Mallory C. Kidwell, Alicia Hofelich Mohr, et al. 2018.
“Data Availability, Reusability, and Analytic Reproducibility:
Evaluating the Impact of a Mandatory Open Data Policy at the Journal
Cognition.” *Royal Society Open Science* 5 (8): 180448.
<https://doi.org/10.1098/rsos.180448>.

</div>

<div id="ref-HoutkoopDataSharingPsychology2018">

Houtkoop, Bobby Lee, Chris Chambers, Malcolm Macleod, Dorothy V. M.
Bishop, Thomas E. Nichols, and Eric-Jan Wagenmakers. 2018. “Data Sharing
in Psychology: A Survey on Barriers and Preconditions.” *Advances in
Methods and Practices in Psychological Science* 1 (1): 70–85.
<https://doi.org/10.1177/2515245917751886>.

</div>

<div id="ref-KleinPracticalGuideTransparency2018">

Klein, Olivier, Tom E. Hardwicke, Frederik Aust, Johannes Breuer, Henrik
Danielsson, Alicia Hofelich Mohr, Hans Ijzerman, Gustav Nilsonne, Wolf
Vanpaemel, and Michael C. Frank. 2018. “A Practical Guide for
Transparency in Psychological Science.” *Collabra: Psychology* 4 (1):
20. <https://doi.org/10.1525/collabra.158>.

</div>

<div id="ref-LindsaySharingDataMaterials2017">

Lindsay, D. Stephen. 2017. “Sharing Data and Materials in Psychological
Science.” *Psychological Science* 28 (6): 699–702.
<https://doi.org/10.1177/0956797617704015>.

</div>

<div id="ref-MartoneDatasharingpsychology2018">

Martone, Maryann E., Alexander Garcia-Castro, and Gary R. VandenBos.
2018. “Data Sharing in Psychology.” *American Psychologist* 73 (2):
111–25. <https://doi.org/10.1037/amp0000242>.

</div>

<div id="ref-morey_peer_2016">

Morey, Richard D., Christopher D. Chambers, Peter J. Etchells, Christine
R. Harris, Rink Hoekstra, Daniël Lakens, Stephan Lewandowsky, et al.
2016. “The Peer Reviewers Openness Initiative: Incentivizing Open
Research Practices Through Peer Review.” *Royal Society Open Science* 3
(1): 150547. <https://doi.org/10.1098/rsos.150547>.

</div>

<div id="ref-nosek_promoting_2015">

Nosek, Brian A., G. Alter, G. C. Banks, D. Borsboom, S. D. Bowman, S. J.
Breckler, S. Buck, et al. 2015. “Promoting an Open Research Culture.”
*Science* 348 (6242): 1422–5. <https://doi.org/10.1126/science.aab2374>.

</div>

<div id="ref-Rouderwhatwhyhow2016">

Rouder, Jeffrey N. 2016. “The What, Why, and How of Born-Open Data.”
*Behavior Research Methods* 48 (3): 1062–9.
<https://doi.org/10.3758/s13428-015-0630-z>.

</div>

<div id="ref-RouderMinimizingMistakesPsychological2019">

Rouder, Jeffrey N., Julia M. Haaf, and Hope K. Snyder. 2019. “Minimizing
Mistakes in Psychological Science.” *Advances in Methods and Practices
in Psychological Science* 2 (1): 3–11.
<https://doi.org/10.1177/2515245918801915>.

</div>

<div id="ref-VanpaemelAreWeWasting2015">

Vanpaemel, Wolf, Maarten Vermorgen, Leen Deriemaecker, and Gert Storms.
2015. “Are We Wasting a Good Crisis? The Availability of Psychological
Research Data After the Storm.” *Collabra: Psychology* 1 (1): Art. 3.
<https://doi.org/10.1525/collabra.13>.

</div>

<div id="ref-VuorreCuratingResearchAssets2018">

Vuorre, Matti, and James P. Curley. 2018. “Curating Research Assets: A
Tutorial on the Git Version Control System.” *Advances in Methods and
Practices in Psychological Science* 1 (2): 219–36.
<https://doi.org/10.1177/2515245918754826>.

</div>

<div id="ref-Wichertspooravailabilitypsychological2006">

Wicherts, Jelte M., Denny Borsboom, Judith Kats, and Dylan Molenaar.
2006. “The Poor Availability of Psychological Research Data for
Reanalysis.” *American Psychologist* 61 (7): 726–28.
<https://doi.org/10.1037/0003-066X.61.7.726>.

</div>

<div id="ref-wickham_pkgdown:_2017">

Wickham, Hadley. 2017. *Pkgdown: Make Static HTML Documentation for a
Package*. <https://github.com/hadley/pkgdown>.

</div>

<div id="ref-WickhamPackagesOrganizeTest2015">

———. 2015. *R Packages: Organize, Test, Document, and Share Your Code*.
"O’Reilly Media, Inc.". <http://r-pkgs.had.co.nz/>.

</div>

<div id="ref-wickham_roxygen2:_2017">

Wickham, Hadley, Peter Danenberg, and Manuel Eugster. 2017. *Roxygen2:
In-Line Documentation for R*.
<https://CRAN.R-project.org/package=roxygen2>.

</div>

<div id="ref-WilkinsonFAIRGuidingPrinciples2016">

Wilkinson, Mark D., Michel Dumontier, IJsbrand Jan Aalbersberg,
Gabrielle Appleton, Myles Axton, Arie Baak, Niklas Blomberg, et al.
2016. “The FAIR Guiding Principles for Scientific Data Management and
Stewardship.” *Scientific Data* 3 (March): 160018.
<https://doi.org/10.1038/sdata.2016.18>.

</div>

</div>
