package org.sgx.raphael4gwt.raphael.util;

//import java.io.File;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.sgx.raphael4gwt.raphael.Raphael;
import org.sgx.raphael4gwt.raphael.base.Point;

import com.google.gwt.user.client.Window;



public class Util {
	
	//misc
	public static String []  intToString(int[]i) {
		String [] a = new String [i.length];
		for(int j=0;j<i.length; j++) {
			a[j]=i[j]+"";
		}
		return a;
	}	

	public static String toString(Collection c, String sep) {
		String s = "";
		for(Object o : c) {
			s+=(o+sep);
		}
		return s;
	}
	public static String toString(Collection c) {
		return toString(c,",");
	}
	public static String toString(Map c) {
		String s = "{";
		for(Object o : c.keySet()) {
			s+=(o+"->"+c.get(o)+", ");
		}
		return s+"}";
	}
	public static String toString(Object[] a) {
		String s="[";
		for(int i=0;i<a.length;i++) {
			if(i!=a.length-1)
				s=s+a[i]+",";	
		}
		return s+"]";
	}
	public static String quote(String str) {
		return "\""+str+"\"";
	}
	
	public static final native String dump(Object o)/*-{
		var s = "{";
		for(var i in o) {
			s+=i+"("+typeof(o[i])+"): "+o[i]+", ";
		}
		return s+"}";
	}-*/;

	
	/**
	 * path in command lines quotation
	 */
public static String quotePath(String path) {
//	if(File.separator.equals("\\"))
		return quote(path);
//	else//unix
//		return path;
	//path.replace(" ", "\\ ")
		
}
	public static String normalizeString(String s) {
		
		return s;
	}
	
	
	//small assertation system for testing
	public static List<String> assertsFailed = new LinkedList<String>();
	public static void cleanTests() {
		assertsFailed.clear();
	}
	public static String printAssertsFailed() {
		Iterator<String> i = assertsFailed.iterator();
		String s=(assertsFailed.isEmpty()?"Non failed asserts":"Asserts failed: ");
		while(i.hasNext()) {
			s+="\n"+i.next();
		}
		return s;
	}
	public static void assertTrue(boolean b, String assertMsg) {
		if(!b)
			assertsFailed.add(assertMsg);
	}
	public static void assertEquals(Object spected, Object actual, String assertMsg) {
		spected = spected==null ? "null" : spected;
		actual = actual==null ? "null" : actual;
		//TODO: error null == "null"
		if(!spected.equals(actual))
			assertsFailed.add(assertMsg+" - +spected: "+spected+", actual: "+actual);
	}
	
//	//test
//	public static void main(String[] args) {
//		int [] b = {1,2,3};
//		String[] a = intToString(b);
//		if(a.length!=3)
//			System.out.println("error 1");
//		if(!FSUtils.normalizePath("hola\\").equals("hola"))
//			System.out.println("error 2");
//		System.out.println("any error?");
//		
//	}

	public static String toStringF(float[] a) {
		String s="[";
		for(int i=0;i<a.length;i++) {
			if(i!=a.length-1)
				s=s+a[i]+",";	
		}
		return s+"]";
	}

	
	public static Map toMap2(Object...a) {
		Map<Object,Object> m = new HashMap<Object,Object>();
		for (int i = 0; i < a.length-1; i=i+2) 
			m.put(a[i], a[i+1]);
		return m;
	}
	public static Map<String,String> toMap2(String...a) {
		Map<String,String> m = new HashMap<String,String>();
		for (int i = 0; i < a.length-1; i=i+2) 
			m.put(a[i], a[i+1]);
		return m;
	}
	public static Map<Object,Object> toMap(Object[][] a) {
		Map<Object,Object> m = new HashMap<Object,Object>();
		for (int i = 0; i < a.length; i++) {
			Object[] b = a[i];
			if(b.length<2)
				throw new RuntimeException("incorrect matrix size");
			m.put(b[0], b[1]);
		}
		return m;
	}
	
	public static List toList(Object[] a) {
		List l = new LinkedList();
		for(int i=0; i<a.length; i++) {
			l.add(a[i]);
		}
		return l;
	}
	
	public static Object[] toArray(Collection a) {
		Object [] t = new Object[a.size()];
		Iterator i = a.iterator();int j=0;
		while(i.hasNext()){
			t[j]=i.next();
			j++;
		}
		return t;
	}
	
	public static void foreach(Collection c, Block b) {
		Iterator i = c.iterator();
		while(i.hasNext()) 
			b.eval(i.next());		
	}
	public static Map<Object, Object> transformArrayToMap(Object[][] a) {
		Map<Object, Object> m = new HashMap<Object, Object>();
		for(int i=0; i<a.length; i++) {
			Object[] a2 = a[i];
			if(a2.length!=2 || !(a2[0]instanceof Object) )
				throw new RuntimeException("bad matrix-representing-object format");
			m.put((Object)a2[0], a2[1]);
		}
		return m;
	}
	public static int randomBetween(int Min, int Max) {
		return Min + (int)(Math.random() * ((Max - Min) + 1));

	}
//	public static boolean isWindows() {
//		return File.separator.equals("\\");
//	}

	public static int getLength(Object []a) {
		if(a==null)return 0;
		else return a.length;
	}

	public static String randomColor() {
		return Raphael.rgb(Util.randomBetween(0,255), Util.randomBetween(0,255), Util.randomBetween(0,255));
	}

	public final native static String getCurrentAddressUrl()/*-{
		return $wnd.document.location.href;
	}-*/;
	
	public static Map<String, String> parseUrlParams(String url) {
		Map<String, String> m = new HashMap<String, String>();
		if(url==null&&!url.contains("?"))
			return m;
		else
			url=url.split("\\?")[1];
		url = Util.unescapeUrl(url);
		String[] b = url.split("&"), a=null;
		if(b!=null) for (int j = 0; j < b.length; j++) {
			a = b[j].split("=");
			if(a!=null&&a.length==2) {
				m.put(a[0], a[1]);
			}
		}
		
		return m;
	}

	public final native static String unescapeUrl(String url)/*-{
		return $wnd.unescape(url);
	}-*/;

	public static boolean contains(Object[] a, Object o) {
		if(a==null||o==null)
			return false;
		for (int i = 0; i < a.length; i++) {
			if(a[i].equals(o))
				return true;
		}
		return false;
	}



//	public static void parseInt(boolean boolean1, int def) {
//		// TODO Auto-generated method stub
//		
//	}
}
