module structure:
```JSON
{
	"id": "The identifier for the module. Typically this is the fully resolved filename.",
	"exports": "Public interface of the module",
	"parent": "The module that first required this one.",
	"filename": "The fully resolved filename to the module.",
	"loaded": "Whether or not the module is done loading, or is in the process of loading.",
	"children": "The module objects required by this one."
}
```