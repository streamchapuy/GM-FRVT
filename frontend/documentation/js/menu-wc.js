'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">gm-frvt documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-ae7f912c55aeb38bacc9710fc5b6b7e700fa3f6c92c41e7f3eabe5708282bdb6081b9f7b6e767069193d7d868b9d9269ca43e340f60cd2772997446208ffca79"' : 'data-bs-target="#xs-components-links-module-AppModule-ae7f912c55aeb38bacc9710fc5b6b7e700fa3f6c92c41e7f3eabe5708282bdb6081b9f7b6e767069193d7d868b9d9269ca43e340f60cd2772997446208ffca79"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ae7f912c55aeb38bacc9710fc5b6b7e700fa3f6c92c41e7f3eabe5708282bdb6081b9f7b6e767069193d7d868b9d9269ca43e340f60cd2772997446208ffca79"' :
                                            'id="xs-components-links-module-AppModule-ae7f912c55aeb38bacc9710fc5b6b7e700fa3f6c92c41e7f3eabe5708282bdb6081b9f7b6e767069193d7d868b9d9269ca43e340f60cd2772997446208ffca79"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeLoggedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeLoggedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeOperarioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeOperarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PendientesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PendientesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TerminadasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TerminadasComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FooterModule.html" data-type="entity-link" >FooterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FooterModule-86a9b08d91a45c8a86f399d017d2232c706a25283576caea37c0c01dc1b9c2af1efeee874e25e5c3ef492f58f84935ec34dcdb7e6524e1be9626092c24ab7746"' : 'data-bs-target="#xs-components-links-module-FooterModule-86a9b08d91a45c8a86f399d017d2232c706a25283576caea37c0c01dc1b9c2af1efeee874e25e5c3ef492f58f84935ec34dcdb7e6524e1be9626092c24ab7746"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FooterModule-86a9b08d91a45c8a86f399d017d2232c706a25283576caea37c0c01dc1b9c2af1efeee874e25e5c3ef492f58f84935ec34dcdb7e6524e1be9626092c24ab7746"' :
                                            'id="xs-components-links-module-FooterModule-86a9b08d91a45c8a86f399d017d2232c706a25283576caea37c0c01dc1b9c2af1efeee874e25e5c3ef492f58f84935ec34dcdb7e6524e1be9626092c24ab7746"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterLogoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterLogoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormulariosModule.html" data-type="entity-link" >FormulariosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FormulariosModule-135dcb1d0f6ea5b1f00527631070836cf690546fd7adcabfc8c0eafdccfc3466fde795bd25cb29d69a07ea5c4fb002b075f4c2c23f9535c52f96d41beb840269"' : 'data-bs-target="#xs-components-links-module-FormulariosModule-135dcb1d0f6ea5b1f00527631070836cf690546fd7adcabfc8c0eafdccfc3466fde795bd25cb29d69a07ea5c4fb002b075f4c2c23f9535c52f96d41beb840269"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormulariosModule-135dcb1d0f6ea5b1f00527631070836cf690546fd7adcabfc8c0eafdccfc3466fde795bd25cb29d69a07ea5c4fb002b075f4c2c23f9535c52f96d41beb840269"' :
                                            'id="xs-components-links-module-FormulariosModule-135dcb1d0f6ea5b1f00527631070836cf690546fd7adcabfc8c0eafdccfc3466fde795bd25cb29d69a07ea5c4fb002b075f4c2c23f9535c52f96d41beb840269"' }>
                                            <li class="link">
                                                <a href="components/FormActivoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormActivoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormEdificioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormEdificioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormPisoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormPisoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormSectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormSectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormTareasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormTareasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormUbicacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormUbicacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormulariosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormulariosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderLoggedModule.html" data-type="entity-link" >HeaderLoggedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HeaderLoggedModule-7fc7a202b8002e7bef731a24bfbc751a4f1ea17858b5ff544a9849a0eacb7253775ef7ee8d4204e2011fcd442f5e4fdad0e7a45f8af93874df509a4f0e0eebcd"' : 'data-bs-target="#xs-components-links-module-HeaderLoggedModule-7fc7a202b8002e7bef731a24bfbc751a4f1ea17858b5ff544a9849a0eacb7253775ef7ee8d4204e2011fcd442f5e4fdad0e7a45f8af93874df509a4f0e0eebcd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderLoggedModule-7fc7a202b8002e7bef731a24bfbc751a4f1ea17858b5ff544a9849a0eacb7253775ef7ee8d4204e2011fcd442f5e4fdad0e7a45f8af93874df509a4f0e0eebcd"' :
                                            'id="xs-components-links-module-HeaderLoggedModule-7fc7a202b8002e7bef731a24bfbc751a4f1ea17858b5ff544a9849a0eacb7253775ef7ee8d4204e2011fcd442f5e4fdad0e7a45f8af93874df509a4f0e0eebcd"' }>
                                            <li class="link">
                                                <a href="components/BuscadorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuscadorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderModule.html" data-type="entity-link" >HeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HeaderModule-a6fb99db6fb90a0ec6617ae61d209c04fd424a3f5aa042196ba151eb9b4773d95d45089c26c23b4e7e3f297aa2df506234d59ffa71678b9cfb908f86f2cd7e1e"' : 'data-bs-target="#xs-components-links-module-HeaderModule-a6fb99db6fb90a0ec6617ae61d209c04fd424a3f5aa042196ba151eb9b4773d95d45089c26c23b4e7e3f297aa2df506234d59ffa71678b9cfb908f86f2cd7e1e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderModule-a6fb99db6fb90a0ec6617ae61d209c04fd424a3f5aa042196ba151eb9b4773d95d45089c26c23b4e7e3f297aa2df506234d59ffa71678b9cfb908f86f2cd7e1e"' :
                                            'id="xs-components-links-module-HeaderModule-a6fb99db6fb90a0ec6617ae61d209c04fd424a3f5aa042196ba151eb9b4773d95d45089c26c23b4e7e3f297aa2df506234d59ffa71678b9cfb908f86f2cd7e1e"' }>
                                            <li class="link">
                                                <a href="components/LogoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavegacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavegacionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdenTrabajoModule.html" data-type="entity-link" >OrdenTrabajoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-OrdenTrabajoModule-cd09d7fb3e4740691ece7720f436ff8b1acb6d43cfc8a99e32be1caba00a8159b4268d2be2b41209d47244427170fd70861ac344efe595a074278df0ae969b56"' : 'data-bs-target="#xs-components-links-module-OrdenTrabajoModule-cd09d7fb3e4740691ece7720f436ff8b1acb6d43cfc8a99e32be1caba00a8159b4268d2be2b41209d47244427170fd70861ac344efe595a074278df0ae969b56"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdenTrabajoModule-cd09d7fb3e4740691ece7720f436ff8b1acb6d43cfc8a99e32be1caba00a8159b4268d2be2b41209d47244427170fd70861ac344efe595a074278df0ae969b56"' :
                                            'id="xs-components-links-module-OrdenTrabajoModule-cd09d7fb3e4740691ece7720f436ff8b1acb6d43cfc8a99e32be1caba00a8159b4268d2be2b41209d47244427170fd70861ac344efe595a074278df0ae969b56"' }>
                                            <li class="link">
                                                <a href="components/OtBannerChicoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtBannerChicoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtBannerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtBannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtBannerFechaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtBannerFechaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtBannerLaborComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtBannerLaborComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtCategoriasBannerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtCategoriasBannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtComentariosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtComentariosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtComentariosContenedorQrComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtComentariosContenedorQrComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtComentariosQrComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtComentariosQrComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtFechaImpresionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtFechaImpresionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtFechaRealizadaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtFechaRealizadaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtInfoActivoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtInfoActivoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtInfoCodigoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtInfoCodigoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtInfoEdificioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtInfoEdificioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtInfoNComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtInfoNComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtInfoPisoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtInfoPisoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtInfoSectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtInfoSectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtInstruccionesBannerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtInstruccionesBannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtInstruccionesTituloComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtInstruccionesTituloComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtLaborComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtLaborComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtLogoBannerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtLogoBannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtTareaListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtTareaListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtTareaOperarioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtTareaOperarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtTiempoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtTiempoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtTituloBannerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtTituloBannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/otComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >otComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/FormLaborComponent.html" data-type="entity-link" >FormLaborComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FormOtComponent.html" data-type="entity-link" >FormOtComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FormUsuariosComponent.html" data-type="entity-link" >FormUsuariosComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OtBanerFechachicaComponent.html" data-type="entity-link" >OtBanerFechachicaComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ActivoService.html" data-type="entity-link" >ActivoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ActivoTareaService.html" data-type="entity-link" >ActivoTareaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CodigoService.html" data-type="entity-link" >CodigoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EdificioService.html" data-type="entity-link" >EdificioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FiltrosService.html" data-type="entity-link" >FiltrosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LaborService.html" data-type="entity-link" >LaborService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NumeroOTService.html" data-type="entity-link" >NumeroOTService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdenTrabajoService.html" data-type="entity-link" >OrdenTrabajoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PisoService.html" data-type="entity-link" >PisoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QrService.html" data-type="entity-link" >QrService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SectorService.html" data-type="entity-link" >SectorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelectionService.html" data-type="entity-link" >SelectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TareaService.html" data-type="entity-link" >TareaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UbicacionService.html" data-type="entity-link" >UbicacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuariosService.html" data-type="entity-link" >UsuariosService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Activo.html" data-type="entity-link" >Activo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ActivoTarea.html" data-type="entity-link" >ActivoTarea</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CodigoActivo.html" data-type="entity-link" >CodigoActivo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Edificio.html" data-type="entity-link" >Edificio</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FiltroInterfas.html" data-type="entity-link" >FiltroInterfas</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRegister.html" data-type="entity-link" >IRegister</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Labor.html" data-type="entity-link" >Labor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Logeo.html" data-type="entity-link" >Logeo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NumeroOT.html" data-type="entity-link" >NumeroOT</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Piso.html" data-type="entity-link" >Piso</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sector.html" data-type="entity-link" >Sector</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tarea.html" data-type="entity-link" >Tarea</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ubicacion.html" data-type="entity-link" >Ubicacion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Usuario.html" data-type="entity-link" >Usuario</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});