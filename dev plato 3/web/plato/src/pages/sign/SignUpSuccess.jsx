import OnlineCount from '../../components/badge/onlineCount';

export default function SignUpSuccess() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center bg-slate-100 py-12 sm:px-6 lg:px-8">
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Thank you!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please check your email for verification link.
          </p>
          <OnlineCount />
        </div>
      </div>
    </>
  );
}
