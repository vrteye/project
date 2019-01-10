from django.conf.urls import url

from LOHO import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    # 登陆
    url(r'^denglu/$', views.denglu, name='denglu'),
    # 注册
    url(r'^zhuce/$', views.zhuce, name='zhuce'),
    # 购物车
    url(r'^mycart/$', views.mycart, name='mycart'),
    # 商品详情页
    url(r'^detail/$', views.detail, name='detail'),
    ## HttpRequest
    url(r'^gettest/$', views.gettest, name='gettest'),
    url(r'^postview/$', views.postview, name='postview'),
    url(r'^posttest/$', views.posttest, name='posttest'),

    ## HttpResponse
    url(r'^redirecttest/$', views.redirecttest, name='redirecttest'),
    url(r'^jsontest/$', views.jsontest, name='jsontest'),

    ## 会话技术
    # 注册
    url(r'^register/$', views.register, name='register'),
    # 退出
    url(r'^logout/$', views.logout, name='logout'),
    # 00登录
    url(r'^login/$', views.login, name='login'),

]