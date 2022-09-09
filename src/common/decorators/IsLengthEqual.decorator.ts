import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  buildMessage,
} from 'class-validator';

/**
 * Checks if the value length is equal to the specified number.
 */
export function IsLengthEqual(
  number: number,
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isLengthEqual',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [number],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments): boolean {
          return +value.length == +args.constraints[0]
        },
        defaultMessage: buildMessage(
          (eachPrefix) => 'The number of $property ' +
            eachPrefix + 'need have ' +
            '$constraint1 of length',
          validationOptions,
        ),
      },
    });
  };
}
