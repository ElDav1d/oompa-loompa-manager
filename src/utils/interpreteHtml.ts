import DOMPurify from 'dompurify';

const interpreteMarkup = (string: string) => {
  return { __html: DOMPurify.sanitize(string) };
};

export default interpreteMarkup;
