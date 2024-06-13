## How to import data from a CKAN site

### Set up python environment

From `/import`, run:

Linux:

```
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -r requirements.txt
```

Windows:
```
python -m venv .venv
.venv\Scripts\activate
python -m pip install -r requirements.txt
```

If PyYAML gives you trouble, try [these steps](https://github.com/yaml/pyyaml/issues/736#issuecomment-1653209769)

### Generate datasets

- Open a shell here, at `/import`
- Generate datasets with `python3 rdl2jkan.py`
- Run `mv generated/_datasets/* ../_datasets` to move generated datasets to where JKAN expects them. This may overwrite the contents of `_datasets`.
