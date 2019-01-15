from django.http import HttpRequest, HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render, redirect


# HttpRequest
from LOHO.models import User

def gettest(request):

    print(request.GET)

    print(request.GET.get('name'))
    print(request.GET.get('sex'))
    print(request.GET.get('haha', '你是开玩笑的吧?'))

    return HttpResponse('GET请求')


def postview(request):
    return render(request, 'postview.html')


def posttest(request):
    print(request.POST)
    print(request.POST.get('user'))

    response = HttpResponse('POST请求')

    return response


def redirecttest(request):
    # return HttpResponseRedirect('/mt/')
    return redirect('mt:index')


def jsontest(request):
    student = {
        'name': '张三',
        'age': 18,
        'score': 90
    }
    return JsonResponse(student)




###### 会话技术
def index(request):

    # 你是谁?
    # 状态保持 [获取cookie]
    username = request.COOKIES.get('username')

    return render(request, 'index.html', context={'username':username})

def register(request):
    if request.method == 'GET': # 获取注册页面
        return render(request, 'register.html')
    elif request.method == 'POST':  # 注册操作
        # 一定要检查，数据能从客户端传输到服务端
        # print(request.POST)

        # 将数据存储到数据库 (建模，迁移操作)
        user = User()
        user.username = request.POST.get('username')
        user.password = request.POST.get('password')
        user.phone = request.POST.get('phone')
        user.save()

        # 状态保持 [设置cookie]
        response = redirect('mt:index')
        response.set_cookie('username', user.username)

        return response

def logout(request):
    response = redirect('mt:index')
    response.delete_cookie('username')
    return response


def login(request):
    if request.method == 'GET': # 获取登录页面
        return render(request, 'login.html')
    elif request.method == 'POST':  # 登录操作
        # 一定要检查，数据能从客户端传输到服务端
        # print(request.POST)

        # 和数据库中的数据对比，假如一致: 成功;   否则: 失败;
        username = request.POST.get('username')
        password = request.POST.get('password')

        users = User.objects.filter(username=username).filter(password=password)
        if users.count():   # 成功
            # 重定向到首页
            response = redirect('mt:index')
            # 状态保持 【设置cookie】
            response.set_cookie('username', username, max_age=(60*60)*24*2)
            return response
        else:   # 失败(用户名或密码错误)
            return render(request, 'login.html', context={'err':'用户名或密码错误'})


def denglu(request):
    return render(request, 'denglu.html')



def zhuce(request):
    if request.method == "GET":
        return render(request, 'zhuce.html')
    if request .method == "POST":
        phone = request.POST['phone']
        password = request.POST['password']
        try:
            user = User(phone=phone, password=password)
            user.save()
            status = 200  # 返回注册成功的编号
        except:
            status = 100  # 返回注册失败的编号
        return JsonResponse({'status': status})
    #


def mycart(request):
    return render(request, 'mycart.html')


def detail(request):
    return render(request, 'detail.html')

