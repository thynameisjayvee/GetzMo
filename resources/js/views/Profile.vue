<template>
  <div>
    <div class="img-bg">

    </div>
    <div class="container-fluid this-position">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <fieldset class="border-settings mt-5 pb-4 px-4">
            <legend align="center"><img src="../../../public/serviceIcons/cash.png" alt="" class="rounded-circle prof-img-resize mb-2"></legend>
            <h4 class="text-center">Jayvee</h4>
            <h6 class="text-center">Paknaan, Mandaue City, Cebu 6000</h6>
            <hr>
            <div class="form-group">
              <div align="right">
                <button id="editButton" type="button" class="btn btn-primary btn-sm mb-1" @click="startEdit">Edit</button>
              </div>
              <textarea class="form-control text-center" id="textAreas" rows="3" placeholder="A simple description of yourself" disabled></textarea>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods : {
    startEdit(){
      var checkStatus = document.getElementById("editButton").innerHTML;
      if(checkStatus == 'Edit'){
        document.getElementById("editButton").innerHTML = "Save"
        $("#textAreas").prop('disabled', false);
      } else {
        document.getElementById("editButton").innerHTML = "Edit"
        $("#textAreas").prop('disabled', true);
      }
    }
  }
}
</script>

<style scoped>
.this-position{
  margin-top: -180px;
}
.img-bg{
  background-image: linear-gradient(#6cb2eb, #f8f9fa);
  background-size: contain;
  height: 180px;
}
.prof-img-resize{
  height: 128px;
  width: 128px;
  border: 5px solid;
  color: lightblue;
  background-color: lightblue;
}
.border-settings{
  /* border: 2px solid; */
  border-radius: 1rem;
  background-color: #DADAD4;
}
</style>
