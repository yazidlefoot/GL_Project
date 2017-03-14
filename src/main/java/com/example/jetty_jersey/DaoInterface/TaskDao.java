package com.example.jetty_jersey.DaoInterface;

import java.util.List;

import com.example.jettey_jersey.util.TaskInfo;
import com.example.jetty_jersey.Dao.*;

public interface TaskDao{

	/**
	*@return the list of all
	**/
	List<Task> getAllTasks();
	
	/**
	*@return the task with the given id
	**/
	TaskInfo getTasksById(int id);
	
	/**
	*@return the task with the given plane id
	**/
	TaskInfo getTasksByPlaneId(int id);
	
	/**
	*@return add a task
	**/
	void addTask(Task t);
	
	/**
	*@return modify a task
	**/
	void modifyTask(Task t);
	
	/**
	*@return delete a task
	**/
	void addTask(int id);

}