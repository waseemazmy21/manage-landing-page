const Features = () => {
  return (
    <section id='features' className='mb-12 lg:mb-38'>
      <div className='container mx-auto px-6 flex flex-col items-center lg:items-start lg:flex-row gap-y-12'>
        <div className='lg:w-1/2 flex flex-col items-center lg:items-start gap-y-8 text-center lg:text-left'>
          <h2 className='text-3xl lg:text-4xl font-bold max-w-2xl'>
            What&rsquo;s different about Manage?
          </h2>
          <p className='max-w-xl lg:max-w-xs text-darkGrayishBlue'>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <ul className='max-w-2xl lg:max-w-none lg:w-1/2 flex flex-col gap-y-10'>
          {/* First item */}
          <li className='flex flex-col lg:flex-row gap-4 lg:gap-7'>
            <div className='flex items-center lg:items-start gap-3 bg-brightRedSupLight lg:bg-transparent rounded-l-full pr-2'>
              <span className='bg-brightRed px-4 py-2 sm:py-3 sm:px-7 text-white font-bold rounded-full'>
                01
              </span>
              <h3 className='text-base sm:text-xl font-bold lg:hidden'>
                Track company-wide progress
              </h3>
            </div>
            <div className='flex flex-col gap-6'>
              <h3 className='hidden lg:block text-base sm:text-xl font-bold'>
                Track company-wide progress
              </h3>
              <p className='text-darkGrayishBlue'>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </li>
          {/* Second item */}
          <li className='flex flex-col lg:flex-row gap-4 lg:gap-7'>
            <div className='flex items-center lg:items-start gap-3 bg-brightRedSupLight lg:bg-transparent rounded-l-full pr-2'>
              <span className='bg-brightRed px-4 py-2 sm:py-3 sm:px-7 text-white font-bold rounded-full'>
                02
              </span>
              <h3 className='text-base sm:text-xl font-bold lg:hidden'>
                Advanced built-in reports
              </h3>
            </div>
            <div className='flex flex-col gap-6'>
              <h3 className='hidden lg:block text-base sm:text-xl font-bold'>
                Advanced built-in reports
              </h3>
              <p className='text-darkGrayishBlue'>
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed
              </p>
            </div>
          </li>
          {/* Third item */}
          <li className='flex flex-col lg:flex-row gap-4 lg:gap-7'>
            <div className='flex items-center lg:items-start gap-3 bg-brightRedSupLight lg:bg-transparent rounded-l-full pr-2'>
              <span className='bg-brightRed px-4 py-2 sm:py-3 sm:px-7 text-white font-bold rounded-full'>
                03
              </span>
              <h3 className='text-base sm:text-xl font-bold lg:hidden'>
                Everything you need in one place
              </h3>
            </div>
            <div className='flex flex-col gap-6'>
              <h3 className='hidden lg:block text-base sm:text-xl font-bold'>
                Everything you need in one place
              </h3>
              <p className='text-darkGrayishBlue'>
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
