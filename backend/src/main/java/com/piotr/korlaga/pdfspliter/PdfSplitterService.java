package com.piotr.korlaga.pdfspliter;

import org.apache.pdfbox.multipdf.Splitter;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

@Service
public class PdfSplitterService {
    public PdfSplitterService() {
    }

    ByteArrayOutputStream split(InputStream is, int from, int to) throws IOException {
        PDDocument pdf = PDDocument.load(is);
        Splitter splitter = new Splitter();
        splitter.setStartPage(from);
        splitter.setEndPage(to);
        List<PDDocument> pages = splitter.split(pdf);
        PDDocument newDocument = new PDDocument();
        for (PDDocument page : pages) {
            newDocument.addPage(page.getPage(0));
        }
        ByteArrayOutputStream output = new ByteArrayOutputStream();
        newDocument.save(output);
        return output;
    }
}