"use strict";(self.webpackChunk_0xTools=self.webpackChunk_0xTools||[]).push([[653],{7653:(e,t,s)=>{s.r(t),s.d(t,{SIWEController:()=>r,W3mConnectingSiwe:()=>I,W3mConnectingSiweView:()=>E,createSIWEConfig:()=>_,formatMessage:()=>d.hwK,getAddressFromMessage:()=>w,getChainIdFromMessage:()=>h,getDidAddress:()=>d.q_h,getDidChainId:()=>d.aG$,mapToSIWX:()=>b,verifySignature:()=>p});var n=s(6844),i=s(574);const a=(0,i.BX)({status:"uninitialized"}),r={state:a,subscribeKey:(e,t)=>(0,n.u$)(a,e,t),subscribe:e=>(0,i.B1)(a,(()=>e(a))),_getClient(){if(!a._client)throw new Error("SIWEController client not set");return a._client},async getNonce(e){const t=this._getClient(),s=await t.getNonce(e);return this.setNonce(s),s},async getSession(){try{const e=this._getClient(),t=await e.getSession();return t&&(this.setSession(t),this.setStatus("success")),t||void 0}catch{return}},createMessage(e){const t=this._getClient().createMessage(e);return this.setMessage(t),t},async verifyMessage(e){const t=this._getClient();return await t.verifyMessage(e)},async signIn(){const e=this._getClient();return await e.signIn()},async signOut(){const e=this._getClient();await e.signOut(),this.setStatus("ready"),this.setSession(void 0),e.onSignOut?.()},onSignIn(e){const t=this._getClient();t.onSignIn?.(e)},onSignOut(){const e=this._getClient();e.onSignOut?.()},async setSIWEClient(e){a._client=(0,i.KR)(e),a.session=await this.getSession(),a.status=a.session?"success":"ready"},setNonce(e){a.nonce=e},setStatus(e){a.status=e},setMessage(e){a.message=e},setSession(e){a.session=e,a.status=e?"success":"ready"}};var o=s(1483);const c={FIVE_MINUTES_IN_MS:3e5};class u{constructor(e){const{enabled:t=!0,nonceRefetchIntervalMs:s=c.FIVE_MINUTES_IN_MS,sessionRefetchIntervalMs:n=c.FIVE_MINUTES_IN_MS,signOutOnAccountChange:i=!0,signOutOnDisconnect:a=!0,signOutOnNetworkChange:r=!0,...o}=e;this.options={enabled:t,nonceRefetchIntervalMs:s,sessionRefetchIntervalMs:n,signOutOnDisconnect:a,signOutOnAccountChange:i,signOutOnNetworkChange:r},this.methods=o}async getNonce(e){const t=await this.methods.getNonce(e);if(!t)throw new Error("siweControllerClient:getNonce - nonce is undefined");return t}async getMessageParams(){return await(this.methods.getMessageParams?.())||{}}createMessage(e){const t=this.methods.createMessage(e);if(!t)throw new Error("siweControllerClient:createMessage - message is undefined");return t}async verifyMessage(e){return await this.methods.verifyMessage(e)}async getSession(){const e=await this.methods.getSession();if(!e)throw new Error("siweControllerClient:getSession - session is undefined");return e}async signIn(){await o.UG.requestSignMessage();const e=await this.methods.getSession();if(!e)throw new Error("Error verifying SIWE signature");return e}async signOut(){const e=o.UG.getSIWX();return!!e&&(await e.setSessions([]),!0)}}var d=s(7326);const g=/0x[a-fA-F0-9]{40}/u,l=/Chain ID: (?<temp1>\d+)/u;function w(e){return e.match(g)?.[0]||""}function h(e){return`eip155:${e.match(l)?.[1]||1}`}async function p(e){let{address:t,message:s,signature:n,chainId:i,projectId:a}=e,r=(0,d.quX)(t,s,n);return r||(r=await(0,d.ucy)(t,s,n,i,a)),r}var S=s(4308),f=s(7022);const m=f.AH`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var C=function(e,t,s,n){var i,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,s,n);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,s,r):i(t,s))||r);return a>3&&r&&Object.defineProperty(t,s,r),r};let I=class extends f.WF{constructor(){super(...arguments),this.dappImageUrl=o.Hd.state.metadata?.icons,this.walletImageUrl=o.Uj.state.connectedWalletInfo?.icon}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return f.qy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};I.styles=m,I=C([(0,S.customElement)("w3m-connecting-siwe")],I);var y=s(6370),v=s(7349),A=function(e,t,s,n){var i,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,s,n);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,s,r):i(t,s))||r);return a>3&&r&&Object.defineProperty(t,s,r),r};let E=class extends f.WF{constructor(){super(...arguments),this.dappName=o.Hd.state.metadata?.name,this.isSigning=!1,this.isCancelling=!1}render(){return f.qy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,o.En.sendEvent({event:"CLICK_SIGN_SIWX_MESSAGE",type:"track",properties:{network:o.WB.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:o.Uj.state.preferredAccountType===v.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}});try{r.setStatus("loading");const e=await r.signIn();return r.setStatus("success"),o.En.sendEvent({event:"SIWX_AUTH_SUCCESS",type:"track",properties:{network:o.WB.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:o.Uj.state.preferredAccountType===v.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),e}catch(e){const t=o.Uj.state.preferredAccountType===v.Vl.ACCOUNT_TYPES.SMART_ACCOUNT;return t?o.Pt.showError("This application might not support Smart Accounts"):o.Pt.showError("Signature declined"),r.setStatus("error"),o.En.sendEvent({event:"SIWX_AUTH_ERROR",type:"track",properties:{network:o.WB.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:t}})}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0;o.WB.state.activeCaipAddress?(await o.x4.disconnect(),o.W3.close()):o.IN.push("Connect"),this.isCancelling=!1,o.En.sendEvent({event:"CLICK_CANCEL_SIWX",type:"track",properties:{network:o.WB.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:o.Uj.state.preferredAccountType===v.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}};A([(0,y.wk)()],E.prototype,"isSigning",void 0),A([(0,y.wk)()],E.prototype,"isCancelling",void 0),E=A([(0,S.customElement)("w3m-connecting-siwe-view")],E);var N=s(4815);const O=[];function b(e){async function t(){try{const t=await e.methods.getSession();if(!t)return;if(!t?.address)throw new Error("SIWE session is missing address");if(!t?.chainId)throw new Error("SIWE session is missing chainId");return t}catch(t){return void console.warn("AppKit:SIWE:getSession - error:",t)}}async function s(){await e.methods.signOut(),e.methods.onSignOut?.()}return O.forEach((e=>e())),O.push(o.WB.subscribeKey("activeCaipNetwork",(async n=>{if(!e.options.signOutOnNetworkChange)return;const i=await t();i&&i.chainId!==N.LX.caipNetworkIdToNumber(n?.caipNetworkId)&&await s()})),o.WB.subscribeKey("activeCaipAddress",(async n=>{if(!e.options.signOutOnDisconnect||n){if(e.options.signOutOnAccountChange){const e=await t(),i=e?.address?.toLowerCase(),a=o.wE?.getPlainAddress(n)?.toLowerCase();e&&i!==a&&await s()}}else{await t()&&await s()}}))),{async createMessage(t){const s=await(e.methods.getMessageParams?.());if(!s)throw new Error("Failed to get message params!");const n=await e.getNonce(t.accountAddress),i=s.iat||(new Date).toISOString();return{nonce:n,version:"1",requestId:s.requestId,accountAddress:t.accountAddress,chainId:t.chainId,domain:s.domain,uri:s.uri,notBefore:s.nbf,resources:s.resources,statement:s.statement,expirationTime:s.exp,issuedAt:i,toString:()=>e.createMessage({...s,chainId:N.LX.caipNetworkIdToNumber(t.chainId)||1,address:`did:pkh:${t.chainId}:${t.accountAddress}`,nonce:n,version:"1",iat:i})}},async addSession(t){if(!N.LX.parseEvmChainId(t.data.chainId))return Promise.resolve();if(await e.methods.verifyMessage(t))return e.methods.onSignIn?.({address:t.data.accountAddress,chainId:N.LX.parseEvmChainId(t.data.chainId)}),Promise.resolve();throw new Error("Failed to verify message")},async revokeSession(e,t){try{await s()}catch(n){console.warn("AppKit:SIWE:revokeSession - signOut error",n)}},async setSessions(e){if(0===e.length)try{await s()}catch(t){console.warn("AppKit:SIWE:setSessions - signOut error",t)}else{const t=e.find((e=>e.data.chainId===o.WB.getActiveCaipNetwork()?.caipNetworkId))||e[0];await this.addSession(t)}},async getSessions(e,s){try{if(!e.startsWith("eip155:"))return[{data:{accountAddress:s,chainId:e},message:"",signature:""}];const n=await t(),i=`eip155:${n?.chainId}`,a=n?.address?.toLowerCase(),r=s?.toLowerCase();if(!n||a!==r||i!==e)return[];return[{data:{accountAddress:n.address,chainId:i},message:"",signature:""}]}catch(n){return console.warn("AppKit:SIWE:getSessions - error:",n),[]}}}}function _(e){return new u(e)}}}]);
//# sourceMappingURL=653.9f503f79.chunk.js.map