const _settingViewDef={
  _if:"ML._uiSwitch._curMainTab=='_setting'",
  _tag:"div",
  _after:function(){
    if(!ML._data._setting){
      bzProxy._socketService._send({
        _data:{
          method:"getSetting"
        },
        _success:function(_msg){
          ML._data._setting=_msg
        }
      })
    }
  },
  _attr:{
    class:"bz-v-panel"
  },
  _items:[
    {
      _tag:"div",
      _attr:{
        class:"bz-main-item"
      },
      _items:[
        {
          _tag:"div",
          _attr:{
            class:"input-group"
          },
          _items:[
            {
              _tag:"label",
              _attr:{
                class:"input-group-addon"
              },
              _text:"_k8sMessage._setting[_data._key]"
            },
            {
              _tag:"input",
              _attr:{
                class:"form-control"
              },
              _dataModel:"ML._data._setting[_data._key]"
            }
          ],
          _dataRepeat:"ML._data._setting"
        }
      ]
    },
    {
      _tag:"button",
      _attr:{
        class:"btn btn-primary re-generate-btn"
      },
      _text:"_k8sMessage._method._generateApp",
      _jqext:{
        click:function(){
          bzProxy._socketService._send({
            method:"updateSetting",
            data:ML._data._setting
          })
        }
      }
    }
  ]
}