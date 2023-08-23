import heroImage from '../images/illustration-intro.svg';

const Hero = () => {
  return (
    <section id='hero' className='mb-20'>
      <div className='container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-y-6 text-center lg:text-left'>
        <div className='flex flex-col items-center lg:items-start gap-6 lg:gap-8 lg:w-[47%]'>
          <h1 className='text-4xl lg:text-5xl font-bold max-w-2xl'>
            Bring everyone together to build better products.
          </h1>
          <p className='max-w-xl text-darkGrayishBlue'>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className='px-8 pt-4 pb-3 bg-brightRed hover:bg-brightRedLight text-white font-bold rounded-full'>
            Get Started
          </button>
        </div>
        <div className='lg:w-[53%]'>
          <img className='w-full' src={heroImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
