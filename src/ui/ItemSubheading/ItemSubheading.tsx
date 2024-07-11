export interface IItemSubheadingProps {
  subHeading: string;
  paragraph: string;
}

const ItemSubheading = ({ subHeading, paragraph }: IItemSubheadingProps) => {
  return (
    <>
      <h4 className='text-gray-500'>{subHeading}</h4>
      <p className='text-gray-500'>
        <i>{paragraph}</i>
      </p>
    </>
  );
};

export default ItemSubheading;
