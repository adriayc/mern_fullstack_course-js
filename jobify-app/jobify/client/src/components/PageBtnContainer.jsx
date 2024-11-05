// Wrappers
import Wrapper from '../assets/wrappers/PageBtnContainer';
// Custom hook (Context)
import { useAllJobsContext } from '../pages/AllJobs';

const PageBtnContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();
  console.log(numOfPages, currentPage);

  return <h1>PageBtnContainer</h1>;
};

export default PageBtnContainer;
