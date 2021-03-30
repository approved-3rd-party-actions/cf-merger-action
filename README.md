# cf-merger-action
The `chick-fil-a/cf-merger-action` action is used to combine multiple CloudFormation template files into one template file. Currently, it only works for [yaml](https://yaml.org/) format.

## Usage

This action can be run on any GitHub hosted runners or self-hosted runners.

```
steps:
  - uses: chick-fil-a/cf-merger-action@v1
    with:
        folder: ./my-policy-files
        output-file: merged.yaml
```

## Inputs

Please see details in [action.yaml](action.yml)

## Contributing

Check out our [contributing guidelines](CONTRIBUTING.md)

## License

[Apache License 2.0](LICENSE)
