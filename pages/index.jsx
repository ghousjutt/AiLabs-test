import Papa from "papaparse";
import { useDispatch, useSelector } from "react-redux";
import { slice as sliceFile } from "../store/slices/file";

const Home = () => {
  const { data } = useSelector((state) => state.file ? state.file : ``);
  const dispatch = useDispatch();

  const handleFileRead = (event) => {
    const { result } = event.target;
    const results = Papa.parse(result, { header: true });
    // array of objects
    dispatch(sliceFile.actions.setData(results.data));
  };
  const handleFileChoose = (file) => {
    // instantiate JS file reader class
    let fileReader = new FileReader();
    // attach event handler to handle operations once file has been loaded
    fileReader.onloadend = handleFileRead;
    // pass file reader the file to read with encoding if required
    fileReader.readAsText(file, "utf-8");
  };
  return (
    <div className='container-fluid'>
      <div className='row p-2 border-bottom'>
        <div className='col-9'>
          <h3>
            <span className='lightFont' data-testid='heading'>
              AI Labs |
            </span>
            Frontend case study
          </h3>
        </div>
        <div className='col-3'>
          <input
            data-testid='upload-button'
            className='inutStyle'
            type='file'
            onChange={(e) => handleFileChoose(e.target.files[0])}
          />
        </div>
      </div>
      <br />
      <div className='card'>
        <div className='card-header'>
          <h4>Data</h4>
        </div>
        <div className='card-body'>
          <div className='col-12 mt-3' data-testid='table-data'>
            {data && data.length > 0 && (
              <table className='table table-bordered borderBlack'>
                <thead className='bgGrey'>
                  <tr className='text-center'>
                    <th>Date</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Close</th>
                    <th>Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.length > 0 &&
                    data.map((pcd, idx) => {
                      return (
                        <tr className='text-center' key={idx}>
                          <td>{pcd.Date}</td>
                          <td>{pcd.Open}</td>
                          <td>{pcd.High}</td>
                          <td>{pcd.Low}</td>
                          <td>{pcd.Close}</td>
                          <td>{pcd.Volume}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
