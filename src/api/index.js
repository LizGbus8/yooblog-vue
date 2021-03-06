import ajax from './ajax'

const BASE_URL = 'http://localhost:8000';


//请求最近文章
export const getBlogger = (params) => ajax(BASE_URL + '/blogger', params);

//请求最近文章
export const getArticle = (params) => ajax(BASE_URL + '/articles', params);

//所有标签
export const getAllTag = () => ajax(BASE_URL + '/tags');

//文章详情
export const getArticleDetail = (params) => ajax(BASE_URL + '/article/'+params);

//文章评论
export const getComments = (params) => ajax(BASE_URL + '/comments', params);

//留言列表
export const getTalks = (params) => ajax(BASE_URL + '/talks',params);

//添加留言
export const addTalk = (params) => ajax(BASE_URL + '/talk', params,'POST');

//添加文章评论
export const addArticleComment = (params) => ajax(BASE_URL + '/article/comment', params,'POST');

//添加评论回复
export const addReply2Comment = (params) => ajax(BASE_URL + '/reply/comment', params,'POST');

//添加子回复回复
export const addReply2Reply = (params) => ajax(BASE_URL + '/reply/reply', params,'POST');

//获取记录
export const getRecords = (params) => ajax(BASE_URL + '/records', params, 'GET');

//获取工具列表
export const getTools = (params) => ajax(BASE_URL + '/tools', params, 'GET');

//获取工具列表
export const getFavorites = (params) => ajax(BASE_URL + '/favorites', params, 'GET');

//获取工具列表
export const getAlbums = (params) => ajax(BASE_URL + '/albums', params, 'GET');
