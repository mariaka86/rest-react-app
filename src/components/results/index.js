import React from 'react';
import './results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

const Results = (props) => {

  return (
    <section data-testid="headers">
    <pre data-testid = "pre-results"></pre>
      {props.headers ?
        (
  
      <>
        <span className="headers"> Headers:
          <JSONPretty data={props.headers} />
          <JSONPretty data={props.data} />
        </span>

       </>
         ) :
(<span>
  Loaddinnng......
</span>)
}

{/* //       }
  //       <pre data-testid = "pre-results">{props.headers ? JSON.stringify(props.headers, undefined, 2) : null}</pre>
  //       <pre data-testid = "pre-results">{data ? JSON.stringify(data, undefined, 2) : null}</pre>
  //     </section>
  //   );
  // } */}
</section >
  )
}


export default Results;