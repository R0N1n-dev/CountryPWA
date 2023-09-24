<template>
    <div>
        <vs-navbar v-model="activeItem" class="nabarx">
            <div slot="title">
                <vs-navbar-title>
                    COUNTRY & CITY SEARCH
                </vs-navbar-title>
            </div>

            <vs-navbar-item index="0">
                <router-link to="/">Home</router-link>
            </vs-navbar-item>
            <vs-navbar-item index="1">
                <router-link to="/about">About</router-link>
            </vs-navbar-item>
            <vs-navbar-item index="2">
                <a href="#">Update</a>
            </vs-navbar-item>
        </vs-navbar>

        <div id="parentx">

            <vs-row vs-type="flex" vs-justify="flex-end">
                <vs-col vs-type="flex" vs-justify="flex-end" vs-lg="1">
                    <vs-button @click="(active = !active), (notExpand = false)" color="dark" type="flat" icon="menu"
                        radius></vs-button>
                </vs-col>

                <vs-col vs-type="flex" vs-justify="center" vs-lg="1">
                    <vs-button @click="(active = !active), (notExpand = true)" color="primary" type="flat" icon="lock"
                        radius></vs-button>
                </vs-col>
            </vs-row>
            <vs-sidebar :reduce="reduce" :reduce-not-hover-expand="notExpand" parent="body" default-index="1"
                color="success" class="sidebarx" spacer v-model="active">

                <div class="header-sidebar" slot="header">
                    <vs-avatar size="70px" :src="pic" />
                </div>
                <vs-sidebar-group open title="Application">
                    <vs-sidebar-item index="1" icon="menu" @click="reduce = !reduce">
                        Toggle Sidebar
                    </vs-sidebar-item>
                    <vs-sidebar-item index="5" icon="verified_user">
                        Configurations
                    </vs-sidebar-item>
                    <vs-sidebar-group title="Store">
                        <vs-sidebar-item index="2.1" icon="store">
                            Store
                        </vs-sidebar-item>
                        <vs-sidebar-item index="2.2" icon="nature_people">
                            Nature
                        </vs-sidebar-item>
                        <vs-sidebar-item index="2.3" icon="style">
                            Style
                        </vs-sidebar-item>
                    </vs-sidebar-group>
                    <vs-sidebar-item index="2" icon="gavel">
                        History
                    </vs-sidebar-item>
                    <vs-sidebar-item index="3" icon="https">
                        Security
                    </vs-sidebar-item>
                    <vs-sidebar-item index="4" icon="help">
                        Help
                    </vs-sidebar-item>
                </vs-sidebar-group>


                <vs-sidebar-item index="6" icon="person" position="left">
                    User
                </vs-sidebar-item>


                <vs-sidebar-item index="7" icon="account_box">
                    Profile
                </vs-sidebar-item>

                <div class="footer-sidebar" slot="footer">
                    <vs-button icon="settings" color="primary" type="border"></vs-button>
                </div>

            </vs-sidebar>
        </div>
    </div>
</template>
  
<script>
import pic from "../assets/moze.jpg";
export default {
    data: () => ({
        activeItem: 0,
        active: false,
        notExpand: false,
        reduce: true,
        pic
    })
};
</script>
  
<style lang="stylus">
  .header-sidebar
    display flex
    align-items center
    justify-content center
    flex-direction column
    width 100%
    h4
      display flex
      align-items center
      justify-content center
      width 100%
      > button
        margin-left 10px
  .footer-sidebar
    display flex
    align-items center
    justify-content space-between
    width 100%
    > button
        border 0px solid rgba(0,0,0,0) !important
        border-left 1px solid rgba(0,0,0,.07) !important
        border-radius 0px !important
  </style>