<?php
/**
 * Created by PhpStorm.
 * User: David
 * Date: 2016/8/20
 * Time: 15:26
 */
// home.controller.php

if(defined('SEASPACE_CONTROLLER_PHP'))
{
    return;
}
else
{
    define('SEASPACE_CONTROLLER_PHP', 1);
}

class SeaspaceController extends AppController
{
    private $db;
    public function __construct()
    {
        parent::__construct();
        config('database');
        $this->db = DBO::instance(DATABASE_CONFIG::$databases['demo']);
        $this->db->connect();
    }

    /**
     * 解析方法
     */
    public function index()
    {
        $this->view->assign('controller', $this);
        $this->view->display('seaSpace');



    }

    public function query()
    {
        $this->view->assign('controller', $this);
        $this->view->display('Query');
    }

    public function option()
    {
        $this->view->assign('controller', $this);
        $this->view->display('seaSpaceDetail');
    }


    public function add_user() {
//        $minDistance = false;
        $rtx = $this->getParam('u');
        $this->db->insert(array('rtx'=>$rtx, 'role'=>2), 't_user');
        $this->get_all();
    }

    public function get_all() {
        $userList = $this->db->getAll('select * from t_user;');
        $this->view->assign('userList', $userList);
        $this->view->display('user_details');
    }

//function idwcomputer($datas, $result) {
//    //数据规范性判断
//    $minLength = 30;
//    $Math = null;
//    if($datas.lenght < $minLength) return $result;
//    var $m0 = $datas.length;
//    var $m1 = $result.length;
//    //计算距离列表
//    var $r=[];
//    for($i=0; $i < $m1; $i ++){
//        for($j = 0; $j < $m0; $j ++){
//            var $tmpDis = Math.sqrt(Math.pow($result[$i].x - $datas[$j].$x, 2) + Math.pow($result[$i].$y - $datas[$j].y, 2));
//            $r.push($tmpDis); //保存距离值
//        }
//    }
//    var $minDistance = 0;
//    //计算插值过程
//    for ($i = 0; $i < $m1; $i ++)
//    {
//        //计算重复性判断
//        var $ifFind = false;
//        for ($j = $m0 * $i; $j < $m0 * $i + $m0; $j ++)
//        {
//            if (Math.abs($r[$j]) < $minDistance)
//            {
//                $result[$i].$v = $datas[$j - $m0 * $i].$v;
//                $ifFind = true;
//                break;
//            }
//        }
//        if ($ifFind) continue;
//        //计算各个点距离和权重值比值
//        var $numerator = 0;
//        var $denominator = 0;
//        for ($j = $m0 * $i; $j < $m0 * $i + $m0; $j ++) {
//            $numerator += $datas[$j - $m0 * $i].$v / ($r[$j] * $r[$j]);
//            $denominator += 1 / ($r[$j] * $r[$j]);
//        }
//        //保存计算结果
//        $result[$i].$v = $numerator / $denominator;
//    }
//    return result;
//}


    public function throw_demo() {
        try {
            $this->db->getAll('select * from non_exist_table;');
        } catch(Exception $e) {
            echo $e->getMessage();
        }
    }
}
?>
