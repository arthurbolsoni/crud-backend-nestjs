import { buildMessage, matches, registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

export function isCPForCNPJ(value: string): boolean {
  return matches(value, /([0-9]{2}[\\.]?[0-9]{3}[\\.]?[0-9]{3}[\\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\\.]?[0-9]{3}[\\.]?[0-9]{3}[-]?[0-9]{2})/)
}

export function IsCPForCNPJ(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: {
        validate: (value, args): boolean => isCPForCNPJ(value),
        defaultMessage: buildMessage(
          eachPrefix => eachPrefix + '$property must be a CPF or CNPJ number',
          validationOptions
        ),
      },
    });
  };
}
