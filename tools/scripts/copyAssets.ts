import * as shell from "shelljs";
shell.cp( "-R", "app/src/templates", "dist/" );
shell.cp( "-R", "app/src/styles", "dist/" );