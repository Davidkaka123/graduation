<?php
// demo.controller.php

if(defined('DEMO_CONTROLLER_PHP'))
{
	return;
}
else
{
	define('DEMO_CONTROLLER_PHP', 1);
}

class DemoController extends AppController
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
	 * 索引页面，用于演示url分发
	 */
	public function index()
	{	
		$this->view->assign('name', $this->getParam('p'));
		$this->view->display('hello_world');
	}
	
	/**
	 * 演示向db中添加用户
	 */
	public function add_user() {
		$rtx = $this->getParam('u');
		$this->db->insert(array('rtx'=>$rtx, 'role'=>2), 't_user');
		$this->get_all();
	}
	
	/**
	 * 演示显示所有用户
	 */
	public function get_all() {
		$userList = $this->db->getAll('select * from t_user;');
		$this->view->assign('userList', $userList);
		$this->view->display('user_details');
	}
	
	/**
	 * 演示异常
	 */
	public function throw_demo() {
		try {
			$this->db->getAll('select * from non_exist_table;');
		} catch(Exception $e) {
			echo $e->getMessage();
		}
	}
}
?>
