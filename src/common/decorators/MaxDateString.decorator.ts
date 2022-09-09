import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  maxDate,
  buildMessage,
} from 'class-validator';

/**
 * Checks if the value is a date that's after the specified date.
 * Works with ISO8601 and string values
 */
export function MaxDateString(
  date: Date,
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'maxDateString',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [date],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments): boolean {
          return maxDate(new Date(value), args.constraints[0]);
        },
        defaultMessage: buildMessage(
          (eachPrefix) =>
            'maximal allowed date for ' +
            eachPrefix +
            '$property is $constraint1',
          validationOptions,
        ),
      },
    });
  };
}
