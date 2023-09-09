
const Cta = () => {
  return (
    <section id='cta' className='bg-brightRed'>
      <div className='container mx-auto px-6 py-[4.4rem] flex flex-col items-center lg:flex-row justify-between gap-y-6'>
        <h2 className='text-4xl text-white font-bold max-w-lg text-center lg:text-left leading-tight'>
          Simplify how your team works today.
        </h2>
        <button className='px-8 pt-4 pb-3 bg-white text-brightRed hover:text-brightRedLight font-bold rounded-full'>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Cta;
