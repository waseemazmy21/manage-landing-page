import PropTypes from 'prop-types';

const Slide = ({ slideData }) => {
  const { personName, personAvatar, text } = slideData;
  return (
    <swiper-slide>
      <blockquote className='flex flex-col gap-y-6 items-center min-h-[14rem] bg-veryLightGray rounded-xl px-12'>
        <img
          src={personAvatar}
          alt='Anisha Li personal phot'
          className='w-[4.5rem] mt-[-2.25rem]'
        />
        <h4 className='text-xl font-bold'>{personName}</h4>
        <p className='text-sm text-darkGrayishBlue text-center'>
          &ldquo; {text} &rdquo;
        </p>
      </blockquote>
    </swiper-slide>
  );
};

Slide.propTypes = {
  slideData: PropTypes.object.isRequired,
};

export default Slide;
