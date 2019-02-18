<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 p-3">
                    <form class="form-box-shadow p-3" action="">
                        <div class="form-group">
                            <label for="">Profile Picture</label>
                            <input type="file" class="form-control-file" name="" id="" placeholder="" aria-describedby="fileHelpId">
                            <small id="fileHelpId" class="form-text text-muted">Help text</small>
                        </div>
                        <div class="form-group">
                          <label for="">First Name</label>
                          <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
                          <small id="helpId" class="form-text text-muted">Help text</small>
                        </div>
                        <div class="form-group">
                          <label for="">Last Name</label>
                          <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
                          <small id="helpId" class="form-text text-muted">Help text</small>
                        </div>
                        <div class="form-group">
                          <label for="">Address</label>
                          <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
                          <small id="helpId" class="form-text text-muted">Help text</small>
                        </div>
                        <div align="center">
                            <button type="button" class="btn btn-primary">Save Changes</button>
                            <button type="button" class="btn btn-danger">Cancel</button>
                        </div>              
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.form-box-shadow{
    box-shadow: 0px 0px 5px 0px #dadad4;
}
</style>
<script>
export default {
    
}
</script>
