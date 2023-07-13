const _podDetailsViewDef={
  _if:"k8s._uiSwitch._curMainTab=='_pods'&&k8s._data._curPodDetails&&k8s._uiSwitch._curPodDetails=='_details'",
  _tag:"div",
  _after:function(){
    _Util._setInDetailsCss()
  },
  _attr:{
    class:"bz-details-panel"
  },
  _items:[
    {
      _tag:"div",
      _attr:{
        class:"bz-v-panel"
      },
      _items:[
        //
        {
          _tag:"div",
          _items:[
            {
              _tag:"div",
              _attr:{
                class:"bz-panel-header"
              },
              _items:[
                '<button class="btn btn-icon bz-star on" style="cursor:default;"></button>',
                '<header>_k8sMessage._common._favor</header>',
                `<button _if='k8s._uiSwitch._showFavorFile' onclick='k8s._uiSwitch._showFavorFile=0' class='btn btn-icon bz-none-border bz-right-space-5 bz-pod'></button>`,
                `<button onclick='_logHandler._switchToLog()' class='btn btn-icon bz-none-border bz-close'></button>`
              ]
            },
            {
              _tag:"div",
              _attr:{
                class:"bz-list-row"
              },
              _items:[
                {
                  _tag:"button",
                  _attr:{
                    class:"'btn btn-icon bz-none-border '+(_data._item.fd?'bz-folder-close':'bz-file')"
                  }
                },
                {
                  _tag:"a",
                  _attr:{
                    class:"bz-node-title"
                  },
                  _text:function(d){
                    return d._item.p.replace("etc/..","")
                  },
                  _jqext:{
                    click:function(){
                      let d=this._data._item
                      d._pod=k8s._data._curPodDetails._pod
                      d._name=d.p.split("/").pop()
                      if(d.fd){
                        k8s._searchStars(d._pod,[d.p])
                      }else{
                        k8s._data._curFile=d
                        k8s._uiSwitch._showFavorFile=1
                        if(!d._content){
                          k8s._openFile(d._pod,d)
                        }
                      }
                    }
                  }
                },
                {
                  _tag:"div",
                  _attr:{
                    style:"flex:1"
                  }
                },
                {
                  _tag:"button",
                  _attr:{
                    class:"btn btn-icon bz-none-border bz-delete"
                  },
                  _jqext:{
                    click:function(){
                      k8s._setStar(this._data._item,k8s._data._curPodDetails._pod)
                    }
                  }
                }
              ],
              _dataRepeat:function(){
                return k8s._data._config.stars.filter(x=>x.s==k8s._data._curPodDetails.gk)
              }
            },
            {
              _if:"!k8s._data._config.stars.filter(x=>x.s==k8s._data._curPodDetails.gk).length",
              _tag:"i",
              _attr:{
                class:"bz-list-row bz-disabled",
                style:"padding: 5px;text-indent: 25px;font-size: 13px;"
              },
              _text:"_k8sMessage._info._noteAddFavorites"
            }
          ]
        },
        {
          _if:"!k8s._uiSwitch._showFavorFile",
          _tag:"div",
          _attr:{
            class:"bz-v-panel",
            style:"flex:1;"
          },
          _items:[
            {
              _tag:"div",
              _attr:{
                class:"bz-panel-header"
              },
              _items:[
                {
                  _tag:"button",
                  _attr:{
                    class:"btn btn-icon bz-computer bz-right-space-5",
                    style:"cursor:default;"
                  }
                },
                {
                  _tag:"header",
                  _text:"k8s._data._curPodDetails._name"
                },
                {
                  _tag:"button",
                  _attr:{
                    class:"btn btn-icon bz-none-border bz-refresh",
                    title:"_k8sMessage._method._refresh"
                  },
                  _jqext:{
                    click:function(){
                      let d=k8s._data._curFile
                      k8s._openFile(d._pod,d)
                    }
                  }
                }
              ]
            },
            {
              _tag:"textarea",
              _attr:{
                style:"flex:1;margin-bottom:-5px;",
                readonly:1
              },
              _dataModel:"k8s._data._curPodDetails._content"
            }
          ]
        },
        {
          _if:"k8s._uiSwitch._showFavorFile",
          _tag:"div",
          _attr:{
            class:"bz-v-panel",
            style:"flex:1;"
          },
          _items:_fileContentViewDef
        }
      ]
    }    
  ]
}