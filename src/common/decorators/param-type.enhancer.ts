import { ParamDecoratorEnhancer } from '@nestjs/common';

/**
 * This enhancer grabs the Typescript type of the parameter and shoves it into
 * the metadata. We do this because the CustomParamFactory does not have access
 * to the type of param.
 */
export const paramTypeEnhancer: ParamDecoratorEnhancer = (
  target: Record<string, unknown>,
  propertyKey: string,
  parameterIndex: number,
): void => {
  // Typescript adds the "design:paramtypes" metadata with an array of class
  // types where the keys are the method argument index and the value is the
  // class type.
  const paramTypes = Reflect.getOwnMetadata(
    'design:paramtypes',
    target,
    propertyKey,
  );
  // We can use the parameterIndex to retrieve the specific type we want.
  const metatype = paramTypes[parameterIndex];
  // Now, we assign the parameter type to the metadata at a key we know.
  Reflect.defineMetadata('partialBodyType', metatype, target[propertyKey]);
};
