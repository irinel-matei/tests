
  $jq = jQuery.noConflict();

  LoginResult = { IsFinalized : false, ErrorCode : 0, IsSuccessful : false, Log : "" };

  function SetError(result, errorCode) {
      result.IsFinalized = true;
      result.IsSuccessful = false;
      result.ErrorCode = errorCode;
  }

  function SetSucces(result){
      result.IsFinalized = true;
      result.IsSuccessful = true;
      result.ErrorCode = 0;
  }


  function AppendLog(result, message){
      result.Log += message + '\r\n';
  }

  function ExecuteLogin(userName, password){

      //no fb_logo => no facebook page
      if( $jq(".fb_logo").size() == 0){
          SetError(LoginResult, 1);
      }

      AppendLog(LoginResult,"$jq('#email') -> " + $jq("#email").size());
      $jq("#email").val(userName);

      AppendLog(LoginResult,"$jq('#pass') -> " + $jq("#pass").size());
      $jq("#pass").val(password);

      AppendLog(LoginResult,"$jq('#loginbutton>input') -> " + $jq("#loginbutton>input").size());
      $jq("#loginbutton>input").click();

       alert(LoginResult.Log)       ;

      SetSucces(LoginResult);
  }
