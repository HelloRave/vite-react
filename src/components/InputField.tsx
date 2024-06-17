/* eslint-disable @typescript-eslint/no-explicit-any */

import { Field, Input, Label } from '@headlessui/react';
import { HTMLInputTypeAttribute } from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';

type TInputProps<TFormValues extends FieldValues> = Readonly<{
  labelText: string;
  name: Path<TFormValues>;
  control: Control<TFormValues, any>;
  errors?: FieldErrors<TFormValues>;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}>;

export default function InputField<TFormValues extends FieldValues>(
  props: TInputProps<TFormValues>,
) {
  return (
    <Field>
      <Label className="block font-inter-regular text-gray-dark">
        {props.labelText}
      </Label>
      <Controller
        name={props.name}
        control={props.control}
        render={({ field }) => (
          <Input
            {...field}
            className={`mt-3 block w-full rounded-xl border border-gray-dark p-2.5 font-inter-regular text-gray-900 focus:outline-none
                        ${props.errors?.[props.name] ? 'border-pink-500 focus:border-pink-500' : 'border-gray-dark focus:border-green-500'}`}
            placeholder={props.placeholder}
            type={props.type}
          />
        )}
      />
    </Field>
  );
}
