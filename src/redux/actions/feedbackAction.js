

export const setFeeling = (value) => (dispatch) => {
   dispatch({
       type: "SET_FEELING",
       payload: value
   })
}

export const setUnderstanding = (value) => (dispatch) => {
    dispatch({
        type: "SET_UNDERSTANDING",
        payload: value
    })
 }
 

 
 export const setSupport = (value) => (dispatch) => {
    dispatch({
        type: "SET_SUPPORT",
        payload: value
    })
 }
 

 
 export const setComments = (value) => (dispatch) => {
    dispatch({
        type: "SET_COMMENTS",
        payload: value
    })
 }

 export const handleNext = (value) => (dispatch) => {
   
    dispatch({
        type: "NEXT",
     
    })
    
  }

  export const submitFeedback = (values) => (dispatch) => {
      fetch("http://localhost:5000/api/feedback", {
          method: "POST",
          headers: {
         'content-type' : "application/json"
          },
          body: JSON.stringify(values)
      })
      .then(res => res.json())
      .then(data => {

        console.log(data)
        dispatch({
            type: "SUCCESS",
      
        })
        
      })
      .catch(err => console.log(err))

  }

  export const thanks = () => (dispatch) => {
       dispatch({
           type: "THANKS"
       })
  }
 
 

