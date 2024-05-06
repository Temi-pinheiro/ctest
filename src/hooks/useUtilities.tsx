/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useSearchParams } from 'react-router-dom';

export const usePanes = (defaultShow: string, key?: string) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const toShow = searchParams.get('show');
  const show = searchParams.get(key ? key : 'show') || defaultShow;
  const handlePaneSwitch = (pane: string) => {
    navigate(key ? `?show=${toShow}&${key}=${pane}` : `?show=${pane}`, {
      replace: true,
    });
  };
  return { show, handlePaneSwitch };
};

import { useLayoutEffect, useRef } from 'react';
export const useOutsideClick = <T extends HTMLElement>(
  handler: (event: any) => void
) => {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    const listener = (event: any) => {
      if (!ref?.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
  return ref;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export function useForm<T>({
  initial,
  useErrors,
  data,
  schema,
}: {
  initial?: T;
  useErrors?: boolean;
  data?: T;
  schema?: {
    [fieldName: string]: {
      rules: {
        rule: string;
        value: any;
        message: string;
      }[];
    };
  };
}) {
  //() => currStep || 3
  const [formData, setFormData] = useState<T | Partial<T>>(() =>
    useErrors ? { ...data } : { ...initial }
  );
  const [errors, setErrors] = useState<T | Partial<T>>({});

  const updateFormData = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: any; type?: string } }
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: type == 'number' ? Number(value) : value,
    }));
    setErrors({ ...errors, [name]: '' });
  };

  const clear = (name: string) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: null,
    }));
  };

  const setData = (data: T) => {
    setFormData(data);
  };

  const errorCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value: formValue }: { name: string; value: any } = e.target;

    const targetSchema = schema?.[name];
    if (!targetSchema) return;
    targetSchema?.rules.map(({ rule, value, message }) => {
      switch (rule) {
        case 'required': {
          if (formValue) break;
          setErrors((prev: any) => ({ ...prev, [name]: message }));
          break;
        }
        case 'pattern': {
          if (new RegExp(value).test(formValue)) break;
          setErrors((prev: any) => ({ ...prev, [name]: message }));
          break;
        }
        default:
          break;
      }
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validation logic goes here

    // Make API request or perform submission logic
  };

  return {
    formData,
    setData,
    clear,
    check: errorCheck,
    update: updateFormData,
    errors,
    setErrors,
    submit: handleSubmit,
  };
}
