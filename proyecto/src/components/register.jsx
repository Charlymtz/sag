import smoke from '../img/smoke.png';

function Register() {
  return (
    <div className="dark:bg-gradient-to-r from-violet-900 via-fuchsia-500 to-violet-900 dark:text-yellow-50">
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img alt="" src={smoke} className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 bg-lavender-200 from-violet-900 via-fuchsia-700 to-violet-900 text-white">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
            <p className="mt-4 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
              ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
        <label htmlFor="Name" className="sr-only">Name</label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-black shadow-sm"
            placeholder="Enter Name"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"/></g>
          </svg>
          </span>
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-black shadow-sm"
            placeholder="Enter email"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
          </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-black shadow-sm"
            placeholder="Enter password"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-white">
          <a className="underline" href="#/">Sign </a>
        </p>

        <button
          type="submit"
          className="inline-block rounded-lg bg-purple-800 px-5 py-3 text-sm font-medium text-white"
        >
          Sign up
        </button>
      </div>
          </form>

          <br />
          <hr />

          
        </div>
      </section>
    </div>
  );
}




export default Register;
