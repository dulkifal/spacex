let filter = async function(){
  let data = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true`);
  let data1 = await data.json();
  return {
    props: {
      data: data1
    }
  }
}
export default filter;