import { Link, useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import Logo from '@/assets/logo.svg?react';
import Button from '@/components/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from '@/components/InputField';
import { TLoginSchema, loginSchema } from '@/schema/auth';

export default function Login() {
  const {
    control,
    formState: { isValid, isSubmitting, errors },
    handleSubmit,
    reset,
  } = useForm<TLoginSchema>({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
      code: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const emailInputAttr = {
    labelText: 'Email',
    control: control,
    placeholder: 'joe@email.com',
    type: 'email',
  };

  const passwordInputAttr = {
    labelText: 'Password',
    control: control,
    placeholder: '******',
    type: 'password',
    errors: errors,
  };

  const onSubmit = handleSubmit(() => {
    reset();
  });

  const navigate = useNavigate();
  return (
    <Fragment>
      <Logo />
      <Fragment>
        <form onSubmit={onSubmit} className="flex w-full flex-col gap-6">
          <div>
            <InputField<TLoginSchema> name="email" {...emailInputAttr} />
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <InputField<TLoginSchema>
                name="password"
                {...passwordInputAttr}
              />
            </div>
            <Link
              to="/auth/forgot-password"
              className="font-inter-regular text-link-blue"
            >
              Forgot password?
            </Link>
          </div>
          <Button type="submit" isDisabled={!isValid || isSubmitting}>
            Sign in
          </Button>
        </form>
        <hr className='h-px w-full overflow-visible text-center text-gray-dark after:relative after:top-[-13px] after:bg-white after:px-3 after:content-["or"]' />
        <p className="font-inter-regular text-sm text-gray-dark">
          By clicking continue, you agree with Wise Manga Club&apos;s&nbsp;
          <Link to="#" className="text-link-blue">
            User Agreement
          </Link>
          ,&nbsp;
          <Link to="#" className="text-link-blue">
            Privacy Policy
          </Link>
          &nbsp; and&nbsp;
          <Link to="#" className="text-link-blue">
            Cookie Policy
          </Link>
        </p>
        <Button onClick={() => navigate('/auth/register')}>
          Don&apos;t have an account? Sign up now
        </Button>
      </Fragment>
    </Fragment>
  );
}
