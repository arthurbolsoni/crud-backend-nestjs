import { ArgumentMetadata, createParamDecorator, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { plainToClassFromExist, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { paramTypeEnhancer } from './param-type.enhancer';

/**
 * Just like @Body() but allows partials. You must have
 * validateCustomDecorators=false in your global validation pipe.
 */
export const PartialBody = createParamDecorator(
  // Someone may want to explicitly choose the type to validate against, so if
  // they pass a parameter like @PartialBody(MyType), then data will be MyType
  // and we will use that for validation instead of the metadata type found.
  async (data: unknown, ctx: ExecutionContext): Promise<any> => {
    // Determine the type, either explicitly provided or from the metadata.
    const metatype = data ?? Reflect.getOwnMetadata('partialBodyType', ctx.getHandler());

    // Validate partially.
    const request = ctx.switchToHttp().getRequest();
    const transformedValue = plainToInstance(metatype, request.body);
    const errors = await validate(transformedValue, {
      skipUndefinedProperties: true
    });

    if (errors.length > 0) {
      throw new HttpException('????????????????', HttpStatus.NOT_FOUND);
    }

    return transformedValue;

    // TODO: throw errors
  },
  [paramTypeEnhancer],
);