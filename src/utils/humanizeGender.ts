import { Gender, HumanizedGender } from '../features/list/interfaces/oompaList';

const humanizeGender = (gender: Gender) => HumanizedGender[gender];

export default humanizeGender;
